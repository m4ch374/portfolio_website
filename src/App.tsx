import AboutMe from "components/About/AboutMe"
import ToolsExperienced from "components/Experience/ToolsExperienced"
import NavBar from "components/Nav/NavBar"
import ParallaxWrapper from "components/Parallax/ParallaxWrapper"
import IntroBanner from "components/intro/IntroBanner"
import React, { useState } from "react"
import DarkTheme from "utils/DarkTheme"

const App: React.FC = () => {
  const themeController = useState(false)

  return (
    <div className="scroll-smooth">
      <DarkTheme.Provider value={themeController}>
        <NavBar />
        <IntroBanner />
        <ParallaxWrapper>
          <AboutMe />
          <ToolsExperienced />
        </ParallaxWrapper>
      </DarkTheme.Provider>
    </div>
  )
}

export default App
