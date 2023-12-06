import React from "react"
import ThemeToggler from "./ThemeToggler"

const NavBar: React.FC = () => {
  return (
    <div className="fixed z-[1000] flex h-[70px] w-full items-center justify-between px-8 backdrop-blur-md">
      <h1 className="font-logo text-[3rem] font-bold drop-shadow-md md:text-[3.5rem]">
        Henry Wan
      </h1>
      <>
        <ThemeToggler />
      </>
    </div>
  )
}

export default NavBar
