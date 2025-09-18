import { useEffect, useState } from 'react'

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    setIsMobile(mql.matches)

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    mql.addEventListener('change', onChange)

    return () => {
      mql.removeEventListener('change', onChange)
    }
  }, [MOBILE_BREAKPOINT])

  return isMobile
}
