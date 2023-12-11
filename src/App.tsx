import FadeDevider from "components/FadeDevider"
import NavBar from "components/NavBar"
import ParallaxBanner from "components/ParallaxBanner"
import SelfIntroduction from "components/SelfIntroduction"
import React, { useState } from "react"
import DarkTheme from "utils/DarkTheme"

// comment
const App: React.FC = () => {
  const themeController = useState(false)

  return (
    <DarkTheme.Provider value={themeController}>
      <div className={`${!themeController[0] && "dark"}`}>
        <NavBar />

        <ParallaxBanner />

        <FadeDevider />

        <SelfIntroduction />
      </div>
    </DarkTheme.Provider>
  )
}

export default App
