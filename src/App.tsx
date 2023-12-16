import NavBar from "components/Nav/NavBar"
import ParallaxWrapper from "components/Parallax/ParallaxWrapper"
import IntroBanner from "components/intro/IntroBanner"
import React, { useState } from "react"
import DarkTheme from "utils/DarkTheme"

const App: React.FC = () => {
  const themeController = useState(false)

  return (
    <DarkTheme.Provider value={themeController}>
      <NavBar />
      <IntroBanner />
      <ParallaxWrapper>hihihi</ParallaxWrapper>
    </DarkTheme.Provider>
  )
}

export default App
