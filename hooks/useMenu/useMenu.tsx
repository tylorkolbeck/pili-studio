import { useState } from 'react'

function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState)
  }


  return { isMenuOpen, toggleMenu }

}

export default useMenu;