import { useEffect, useState } from 'react'

interface Project {
  name: string
  title: string
  description: string
  path: string
  icon: string
  color: string
}

interface ProjectsData {
  projects: Project[]
}

const iconMap: Record<string, string> = {
  game: '\uD83C\uDFAE',
  code: '\uD83D\uDCBB',
  chart: '\uD83D\uDCCA',
  book: '\uD83D\uDCDA',
}

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data: ProjectsData) => {
        setProjects(data.projects)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load projects:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          bekurin's Projects
        </h1>
        <p style={{ color: '#B3B3B3' }}>
          Side projects collection
        </p>
      </header>

      <main>
        {loading ? (
          <div style={{ textAlign: 'center', color: '#B3B3B3' }}>Loading...</div>
        ) : projects.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#B3B3B3' }}>No projects found</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.path}
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  backgroundColor: '#1E1E1E',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
                  borderLeft: `4px solid ${project.color}`,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)'
                  e.currentTarget.style.boxShadow = `0 4px 20px ${project.color}33`
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{iconMap[project.icon] || iconMap['code']}</span>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: project.color }}>
                    {project.title}
                  </h2>
                </div>
                <p style={{ color: '#B3B3B3', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        )}
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#666', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} bekurin</p>
      </footer>
    </div>
  )
}

export default App
