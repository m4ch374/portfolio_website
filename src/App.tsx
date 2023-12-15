import ParallaxWrapper from "components/ParallaxWrapper"
import IntroBanner from "components/intro/IntroBanner"
import React, { useState } from "react"
import DarkTheme from "utils/DarkTheme"

const App: React.FC = () => {
  const themeController = useState(false)

  return (
    <DarkTheme.Provider value={themeController}>
      <IntroBanner />
      <ParallaxWrapper>hi</ParallaxWrapper>
    </DarkTheme.Provider>
  )
}

export default App
