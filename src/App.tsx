import AboutMe from "components/About/AboutMe"
import ContactMe from "components/Contact/ContactMe"
import SlantedDivider from "components/Contact/SlantedDivider"
import ProfessionalExperience from "components/Experience/ProfessionalExperience"
import ToolsExperienced from "components/Experience/ToolsExperienced"
import NavBar from "components/Nav/NavBar"
import RecentProjects from "components/Projects/RecentProjects"
import IntroBanner from "components/intro/IntroBanner"
import React, { Suspense, lazy } from "react"

const ParallaxWrapper = lazy(
  () => import("components/Parallax/ParallaxWrapper"),
)

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <IntroBanner />
      <Suspense fallback={undefined}>
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
      </Suspense>
    </div>
  )
}

export default App
