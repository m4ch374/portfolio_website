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

        <div className="absolute z-50 mt-[-70px] h-[70px] w-full bg-gradient-to-b from-transparent to-[#b3734b]" />

        <SelfIntroduction />
      </div>
    </DarkTheme.Provider>
  )
}

export default App
