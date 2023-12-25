import React from "react"

type TExperienceThumbnail = {
  imgSrc: string
}

const ExperienceThumbnail: React.FC<TExperienceThumbnail> = ({ imgSrc }) => {
  return (
    <img
      draggable={false}
      src={imgSrc}
      className="m-4 h-24 w-24 rounded-md border border-zinc-400/20 drop-shadow-lg"
    />
  )
}

export default ExperienceThumbnail
