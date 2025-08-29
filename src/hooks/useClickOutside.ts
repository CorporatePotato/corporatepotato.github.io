import { useEffect } from 'react'

export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onClose: () => void,
  active = true,
  ignoreRefs: React.RefObject<HTMLElement | null>[] = []
) {
  useEffect(() => {
    if (!active) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      const isInsideMain = ref.current?.contains(target)
      const isInsideIgnored = ignoreRefs.some((ignoreRef) =>
        ignoreRef.current?.contains(target)
      )

      if (!isInsideMain && !isInsideIgnored) {
        onClose()
      }
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [ref, onClose, active, ignoreRefs])
}
