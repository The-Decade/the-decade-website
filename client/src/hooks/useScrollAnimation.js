import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => {
    // Initialize as true to ensure content is visible on first render
    // The component will be in viewport on mount
    return true
  })

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold }
    )
    
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}