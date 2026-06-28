import { motion } from 'framer-motion'

const PAGES = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'writing', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const PAGE_LAYERS = {
  about: ['Hero', 'Bio Card', 'Objects', 'Annotations'],
  work: ['Projects Grid', 'Cards', 'Tags', 'Links'],
  writing: ['Articles', 'Medium Links', 'Categories'],
  experience: ['Timeline', 'Education', 'Skills'],
  contact: ['Title', 'Email', 'Socials', 'Note'],
}

export default function Sidebar({ currentPage, onPageChange }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="file-name">Freya Thakkar</div>
        <div className="file-subtitle">Portfolio</div>
      </div>

      <div className="search-bar">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="6.5" cy="6.5" r="4" />
          <path d="M10 10l4 4" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '12px',
            width: '100%',
            color: 'var(--color-text-secondary)',
          }}
        />
      </div>

      <div className="sidebar-section">
        <label className="sidebar-label">Pages</label>
        <ul className="page-list" role="navigation" aria-label="Portfolio pages">
          {PAGES.map(page => (
            <motion.li
              key={page.id}
              className={`page-item ${currentPage === page.id ? 'active' : ''}`}
              onClick={() => onPageChange(page.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onPageChange(page.id)
                }
              }}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              role="button"
              tabIndex={currentPage === page.id ? 0 : -1}
              aria-pressed={currentPage === page.id}
              aria-label={`Go to ${page.label} page`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="12" height="12" rx="1" />
                <line x1="2" y1="5" x2="14" y2="5" />
              </svg>
              <span className="page-item-label">{page.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <label className="sidebar-label">Layers</label>
        <div className="layer-tree">
          {PAGE_LAYERS[currentPage]?.map((layer, idx) => (
            <div key={idx} className="layer-item">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M2 2h8v8H2z" />
              </svg>
              <span>{layer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
