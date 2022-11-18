import React, { useEffect, useState } from 'react'

function useScroll() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.scrollY;
      if (currentPosition > scrollTop) {
        setScrolling(false)
      } else {
        setScrolling(true)
      }

      setScrollTop(currentPosition <= 1 ? 0 : currentPosition)

      if (scrollTop > 0) {
        setIsScrolled(true)
      }

      if (scrollTop < 1) {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop, scrolling])

  return { scrolling, scrollTop, isScrolled }

}

export default useScroll
