import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

function ScrollLayout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

export default ScrollLayout
