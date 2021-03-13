import { useState, useEffect } from 'react'

export default function useScroll() {
    const [isScrolled, setIsScrolled] = useState(false)

    const onScroll = () => {
        const scrollTop = window !== undefined ? window.pageYOffset : 0
        setIsScrolled(scrollTop > 10)
    }

    useEffect(() => {
        // { passive: true } improves scrolling performance
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            window.removeEventListener("scroll", onScroll, { passive: true })
        }
    }, [])

    return { isScrolled }
}
