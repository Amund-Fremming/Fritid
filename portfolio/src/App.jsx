import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary pb-32">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="mt-16" />
          <Hero />
        </div>

        {/* SECTIONS */}
        <Experience />
        {/* <About /> */}
        {/* 
        Funker ikke
        <Tech /> 
        */}
        <Works />

        {/*

        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        */}
      </div>
    </BrowserRouter>
  )
}

export default App