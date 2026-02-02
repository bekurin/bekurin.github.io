import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

async function mergeBuild() {
  const finalDist = path.join(ROOT, 'dist')
  const projectsDir = path.join(ROOT, 'projects')
  const projectsJsonPath = path.join(ROOT, 'projects.json')

  console.log('Starting build merge...')

  // Clear final dist folder
  await fs.emptyDir(finalDist)
  console.log('Cleared dist folder')

  // Copy landing page to root
  const landingDist = path.join(projectsDir, 'landing', 'dist')
  if (await fs.pathExists(landingDist)) {
    await fs.copy(landingDist, finalDist)
    console.log('Copied landing page to root')
  } else {
    console.warn('Warning: landing project dist not found')
  }

  // Copy projects.json to dist for landing page
  if (await fs.pathExists(projectsJsonPath)) {
    await fs.copy(projectsJsonPath, path.join(finalDist, 'projects.json'))
    console.log('Copied projects.json')
  }

  // Copy each project to its subfolder
  const projects = await fs.readdir(projectsDir)

  for (const project of projects) {
    if (project === 'landing') continue

    const projectDist = path.join(projectsDir, project, 'dist')
    if (await fs.pathExists(projectDist)) {
      const targetDir = path.join(finalDist, project)
      await fs.copy(projectDist, targetDir)
      console.log(`Copied ${project} to ${targetDir}`)
    } else {
      console.warn(`Warning: ${project} dist not found`)
    }
  }

  console.log('Build merge completed!')
}

mergeBuild().catch((err) => {
  console.error('Build merge failed:', err)
  process.exit(1)
})
