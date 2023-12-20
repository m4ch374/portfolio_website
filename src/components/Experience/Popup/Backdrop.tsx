import React from "react"

type TBackdrop = {
  children?: string | JSX.Element | JSX.Element[]
}

const Backdrop: React.FC<TBackdrop> = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 z-[60] h-screen w-full backdrop-blur-md">
      {children}
    </div>
  )
}

export default Backdrop
