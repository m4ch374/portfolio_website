import AboutMe from "components/About/AboutMe"
import ProfessionalExperience from "components/Experience/ProfessionalExperience"
import ToolsExperienced from "components/Experience/ToolsExperienced"
import NavBar from "components/Nav/NavBar"
import ParallaxWrapper from "components/Parallax/ParallaxWrapper"
import IntroBanner from "components/intro/IntroBanner"
import React from "react"

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <IntroBanner />
      <ParallaxWrapper>
        <AboutMe />
        <ToolsExperienced />
        <ProfessionalExperience />
      </ParallaxWrapper>
    </div>
  )
}

export default App
