import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function Canvas({ currentPage, pages }) {
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const artboardCoordinates = {
    about: { x: 0, y: 0 },
    work: { x: 1200, y: 0 },
    writing: { x: 2400, y: 0 },
    experience: { x: 3600, y: 0 },
    contact: { x: 4800, y: 0 },
  }

  const artboardSize = { width: 1024, height: 800 }

  useEffect(() => {
    if (isDragging || !containerRef.current) return

    const targetCoords = artboardCoordinates[currentPage]
    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // Center the artboard in the viewport
    const targetX = -(targetCoords.x - (containerWidth - artboardSize.width) / 2)
    const targetY = -(targetCoords.y - (containerHeight - artboardSize.height) / 2)

    x.set(targetX)
    y.set(targetY)
  }, [currentPage, isDragging, x, y])

  return (
    <div className="canvas-area" ref={containerRef}>
      <motion.div
        className={`canvas-viewport ${isDragging ? 'dragging' : ''}`}
        drag
        dragMomentum={{
          x: { power: 0.5, restDelta: 0.001 },
          y: { power: 0.5, restDelta: 0.001 },
        }}
        dragElastic={0.05}
        dragConstraints={{
          left: -5000,
          right: 500,
          top: -1000,
          bottom: 500,
        }}
        style={{ x, y }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <motion.div className="canvas-world">
          {Object.entries(pages).map(([pageKey, PageComponent]) => {
            const coords = artboardCoordinates[pageKey]
            return (
              <motion.div
                key={pageKey}
                className={`artboard ${currentPage === pageKey ? 'active' : ''}`}
                style={{
                  width: artboardSize.width,
                  height: artboardSize.height,
                  left: coords.x,
                  top: coords.y,
                }}
                animate={{
                  opacity: currentPage === pageKey ? 1 : 0.5,
                  scale: currentPage === pageKey ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <PageComponent />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
