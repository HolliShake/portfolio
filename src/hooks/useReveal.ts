import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-hidden'))
    if (elements.length === 0) return

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.classList.remove('reveal-hidden')
          el.classList.add('reveal-show')
          observer.unobserve(el)
        }
      }
    }

    const observer = new IntersectionObserver(onIntersect, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}


