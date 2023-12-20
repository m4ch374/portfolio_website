import React from "react"

type TExpertiseCard = {
  children?: string | JSX.Element | JSX.Element[]
}

const ExpertiseCard: React.FC<TExpertiseCard> = ({ children }) => {
  return (
    <div
      className="
        card
        relative
        h-[calc(100%-2px)]
        min-h-[360px]
        w-[calc(100%-2px)]
        min-w-[360px]
        flex-1
        rounded-md
        bg-stone-400/20
        before:absolute
        before:left-0
        before:top-0
        before:z-30
        before:h-full
        before:w-full
        before:rounded-[inherit]
        before:opacity-0
        before:transition-opacity
        before:duration-500
        after:absolute
        after:left-0
        after:top-0
        after:z-10
        after:h-full
        after:w-full
        after:rounded-[inherit]
        after:opacity-0
        after:transition-opacity
        after:duration-500
        before:hover:opacity-100
      "
    >
      <div className="absolute inset-[1px] z-20 rounded-[inherit] bg-stone-900">
        {children}
      </div>
    </div>
  )
}

export default ExpertiseCard
