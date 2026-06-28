import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ToolbarDock() {
  const [activeTool, setActiveTool] = useState('cursor')

  const tools = [
    {
      id: 'cursor',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M3 3l18 18L3 18.5L9 9L3 3z" />
        </svg>
      ),
    },
    {
      id: 'frame',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
    },
    {
      id: 'scale',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
    },
  ]

  return (
    <div className="toolbar-dock">
      <div className="toolbar-pill">
        {tools.map(tool => (
          <motion.div
            key={tool.id}
            className={`toolbar-icon ${activeTool === tool.id ? 'active' : ''}`}
            onClick={() => setActiveTool(tool.id)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {tool.icon}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
