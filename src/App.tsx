import AboutMe from "components/About/AboutMe"
import ProfessionalExperience from "components/Experience/ProfessionalExperience"
import ToolsExperienced from "components/Experience/ToolsExperienced"
import NavBar from "components/Nav/NavBar"
import ParallaxWrapper from "components/Parallax/ParallaxWrapper"
import RecentProjects from "components/Projects/RecentProjects"
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
        <div className="w-full overflow-hidden">
          <RecentProjects />
        </div>
      </ParallaxWrapper>
    </div>
  )
}

export default App
