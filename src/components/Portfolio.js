import React from 'react'
import gamestorehome from "../assets/gamestorehome.png"
import notemark from "../assets/notemark.png"
import news from "../assets/news.png"


const Portfolio = () => {


    const projects = [
        {
            id: 1,
            src: notemark,
            alt: "NoteMark",
            href: "https://github.com/VKasurinen/NoteMark"

        },
        {
            id: 2,
            src: gamestorehome,
            alt: "Game Store",
            href: "https://github.com/VKasurinen/Game-Store"

        },

        {
            id: 3,
            src: news,
            alt: "VKNews",
            href: "https://github.com/VKasurinen/VKNews"

        },

    ]



  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
        <div className="max-w-screen-lg px-4 py-24 mx-auto flex flex-col justify-center w-full min-h-screen">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">You can check out some of my work here</p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12">

                {projects.map(({id, src, alt, href}) => (

                    <a key={id} href={href} target="_blank" rel="noreferrer"
                    className="group block max-w-xs w-full mx-auto shadow-md shadow-gray-600 rounded-lg overflow-hidden cursor-pointer">
                        <img src={src} alt={alt} className="w-full h-96 object-contain duration-200 group-hover:scale-105" />
                        <div className="flex items-center justify-center">
                            <span className="w-1/2 px-6 py-3 m-4 text-center duration-200 group-hover:scale-105">
                                Code
                            </span>
                        </div>
                    </a>
                ))
                }

            </div>

        </div>
    </div>
  )
}

export default Portfolio
