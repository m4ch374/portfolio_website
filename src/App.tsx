import AboutMe from "components/About/AboutMe"
import ContactMe from "components/Contact/ContactMe"
import SlantedDivider from "components/Contact/SlantedDivider"
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
        <div className="relative w-full overflow-hidden">
          <RecentProjects />
          <SlantedDivider />
        </div>
        <ContactMe />
      </ParallaxWrapper>
    </div>
  )
}

export default App
