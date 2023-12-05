import ParallaxBanner from "components/ParallaxBanner"
import SelfIntroduction from "components/SelfIntroduction"
import React from "react"

// comment
const App: React.FC = () => {
  return (
    <div>
      <ParallaxBanner />

      <div className="absolute z-50 mt-[-80px] h-[80px] w-full bg-gradient-to-b from-transparent to-[#b3734b] to-80%" />

      <SelfIntroduction />
    </div>
  )
}

export default App
