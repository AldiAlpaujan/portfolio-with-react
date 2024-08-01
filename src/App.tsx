import AppWrapper from "./components/template/AppWrapper"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Service from "./pages/Service"

function App() {
  return (
    <AppWrapper>
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
    </AppWrapper>
  )
}

export default App
