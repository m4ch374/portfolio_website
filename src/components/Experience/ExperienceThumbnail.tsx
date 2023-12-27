import React from "react"

type TExperienceThumbnail = {
  imgSrc: string
  companyName: string
  companyLink: string
}

const ExperienceThumbnail: React.FC<TExperienceThumbnail> = ({
  imgSrc,
  companyName,
  companyLink,
}) => {
  return (
    <div className="group relative m-4">
      <h3 className="absolute inset-x-0 -top-5 w-full rounded-md border border-zinc-400/30 bg-zinc-700/70 px-2 py-1 text-center text-xs font-thin opacity-0 backdrop-blur-sm transition-all group-hover:-top-10 group-hover:opacity-100">
        {companyName}
      </h3>
      <a target="_blank" href={companyLink} rel="noreferrer">
        <img
          draggable={false}
          src={imgSrc}
          className="h-24 w-24 rounded-md border border-zinc-400/20 drop-shadow-lg"
        />
      </a>
    </div>
  )
}

export default ExperienceThumbnail
