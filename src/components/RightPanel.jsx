import { motion } from 'framer-motion'

export default function RightPanel({ darkMode, onToggleDarkMode }) {
  return (
    <div className="right-panel">
      <div className="panel-header">
        <div className="avatar">
          <img src="/avatar.svg" alt="Freya Thakkar" />
        </div>
        <div className="panel-actions">
          <motion.button
            className="icon-btn"
            onClick={onToggleDarkMode}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onToggleDarkMode()
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {darkMode ? (
                <>
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </>
              ) : (
                <>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </>
              )}
            </svg>
          </motion.button>
          <motion.button
            className="say-hii-btn"
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(13, 153, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = 'mailto:freyaidesign@gmail.com')
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.location.href = 'mailto:freyaidesign@gmail.com'
              }
            }}
            aria-label="Send email to freyaidesign@gmail.com"
            title="Click to send an email"
          >
            Say hii
          </motion.button>
        </div>
      </div>

      <div className="panel-tabs">
        <div className="panel-tab active">Design</div>
      </div>

      <div className="panel-content">
        <div className="panel-section">
          <label className="panel-section-label">Page</label>
          <div className="page-swatch">
            <div className="swatch" />
            <span className="swatch-label">F2F2F2 · 100%</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 3v10M3 8h10" stroke="currentColor" fill="none" />
            </svg>
          </div>
        </div>

        <div className="panel-section">
          <label className="panel-section-label">Links</label>
          <div className="links-list">
            <div className="link-row">
              <a href="https://instagram.com/freyathakkar_" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <span className="link-arrow">↗</span>
            </div>
            <div className="link-row">
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span className="link-arrow">↗</span>
            </div>
            <div className="link-row">
              <a href="mailto:freyaidesign@gmail.com">
                Email
              </a>
              <span className="link-arrow">↗</span>
            </div>
          </div>
        </div>

        <div className="panel-footer">
          Made with ♥ by Freya Thakkar and Claude
        </div>
      </div>
    </div>
  )
}
