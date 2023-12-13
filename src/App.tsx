import React, { useState } from "react"
import DarkTheme from "utils/DarkTheme"

const App: React.FC = () => {
  const themeController = useState(false)

  return (
    <DarkTheme.Provider value={themeController}>
      <div></div>
    </DarkTheme.Provider>
  )
}

export default App
