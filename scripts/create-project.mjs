#!/usr/bin/env node
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import readline from 'readline'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve))
}

async function createProject() {
  console.log('\n=== New Project Scaffolding ===\n')

  const name = await question('Project name (kebab-case): ')
  if (!name || !/^[a-z][a-z0-9-]*$/.test(name)) {
    console.error('Error: Invalid project name. Use kebab-case (e.g., my-project)')
    rl.close()
    process.exit(1)
  }

  const title = await question('Display title: ')
  const description = await question('Description: ')
  const portInput = await question('Dev server port (default: 3002): ')
  const port = portInput || '3002'

  const projectDir = path.join(ROOT, 'projects', name)

  if (await fs.pathExists(projectDir)) {
    console.error(`Error: Project "${name}" already exists!`)
    rl.close()
    process.exit(1)
  }

  // Create folder structure
  await fs.ensureDir(path.join(projectDir, 'src'))
  await fs.ensureDir(path.join(projectDir, 'public'))

  // Create package.json
  const packageJson = {
    name: `@bekurin/${name}`,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc -b && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'react-router-dom': '^7.1.0',
    },
    devDependencies: {
      '@types/react': '^18.3.17',
      '@types/react-dom': '^18.3.5',
      '@vitejs/plugin-react': '^4.3.4',
      typescript: '~5.6.2',
      vite: '^6.0.5',
    },
  }
  await fs.writeJson(path.join(projectDir, 'package.json'), packageJson, { spaces: 2 })

  // Create vite.config.ts
  const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/${name}/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: ${port},
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
`
  await fs.writeFile(path.join(projectDir, 'vite.config.ts'), viteConfig)

  // Create tsconfig.json
  const tsconfig = {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      isolatedModules: true,
      moduleDetection: 'force',
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      noUncheckedIndexedAccess: true,
      baseUrl: '.',
      paths: { '@/*': ['src/*'] },
    },
    include: ['src'],
  }
  await fs.writeJson(path.join(projectDir, 'tsconfig.json'), tsconfig, { spaces: 2 })

  // Create index.html
  const indexHtml = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
  await fs.writeFile(path.join(projectDir, 'index.html'), indexHtml)

  // Create main.tsx
  const mainTsx = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/${name}">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
`
  await fs.writeFile(path.join(projectDir, 'src/main.tsx'), mainTsx)

  // Create App.tsx
  const appTsx = `import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
`
  await fs.writeFile(path.join(projectDir, 'src/App.tsx'), appTsx)

  // Create vite-env.d.ts
  await fs.writeFile(path.join(projectDir, 'src/vite-env.d.ts'), '/// <reference types="vite/client" />\n')

  // Update projects.json
  const projectsJsonPath = path.join(ROOT, 'projects.json')
  let projectsMeta = { projects: [] }
  if (await fs.pathExists(projectsJsonPath)) {
    projectsMeta = await fs.readJson(projectsJsonPath)
  }

  projectsMeta.projects.push({
    name,
    title,
    description,
    path: `/${name}`,
    icon: 'code',
    color: '#5865F2',
  })

  await fs.writeJson(projectsJsonPath, projectsMeta, { spaces: 2 })

  // Update root package.json with new dev script
  const rootPackageJsonPath = path.join(ROOT, 'package.json')
  const rootPackageJson = await fs.readJson(rootPackageJsonPath)
  rootPackageJson.scripts[`dev:${name}`] = `npm run dev --workspace=@bekurin/${name}`
  await fs.writeJson(rootPackageJsonPath, rootPackageJson, { spaces: 2 })

  console.log(`\nProject "${name}" created successfully!\n`)
  console.log('Next steps:')
  console.log('  1. npm install (from root)')
  console.log(`  2. npm run dev:${name}`)
  console.log('')

  rl.close()
}

createProject().catch((err) => {
  console.error('Error:', err)
  rl.close()
  process.exit(1)
})
