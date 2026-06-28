import { useState, useEffect } from 'react'
import './styles.css'
import Sidebar from './components/Sidebar'
import RightPanel from './components/RightPanel'
import ToolbarDock from './components/ToolbarDock'
import Canvas from './components/Canvas'
import { pages } from './pages'

export default function App() {
  const [currentPage, setCurrentPage] = useState('about')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.style.colorScheme = 'light'
    }
  }, [darkMode])

  return (
    <div className="app" data-theme={darkMode ? 'dark' : 'light'}>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <Canvas currentPage={currentPage} pages={pages} />
      <RightPanel
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
      <ToolbarDock />
    </div>
  )
}
