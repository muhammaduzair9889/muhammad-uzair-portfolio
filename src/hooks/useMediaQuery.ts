import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add listener
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 768px)')
}

export const useIsTablet = (): boolean => {
  return useMediaQuery('(max-width: 1024px)')
}
