import React from 'react'
import gamestoreapp_2 from "../assets/gamestoreapp_2.png"
import calculator from "../assets/calculator.png"
import todo2 from "../assets/todo.png"
//import { Link } from 'react-scroll'
//import {MdOutlineKeyboardArrowRight} from "react-icons/md"


const Portfolio = () => {


    const projects = [
        {
            id: 1,
            src: gamestoreapp_2,
            href: "https://github.com/luris123/gameStoreApp"

        },
        {
            id: 2,
            src: calculator,
            href: "https://github.com/VKasurinen/Pikku-projekteja/tree/main/Calculator_2.0_android/Calculator_20"

        },

        {
            id: 3,
            src: todo2,
            href: "https://github.com/VKasurinen/TodoWebsiteClient"
            //href: "https://github.com/VKasurinen/Pikku-projekteja"

        },
        
    ]



  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">You can check out some of my work here</p>
            </div>

            

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-56 px-12 sm:px-0">

                {projects.map(({id, src, href}) => (

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 object-contain h-96 object-cover h-96"  />
                    <div className="flex items-center justify-center">
                        {/* <button></button> */}
                        <button rel="noreferrer" target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            <a href={href} target="_blank" rel="noreferrer">Code</a>
                            </button>

                        {/* <button className=" group text-white w-fit px-2 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Code
                            <span className="group-hover:translate-x-2 duration-300">
                            <MdOutlineKeyboardArrowRight size={20}  className="ml-1"/>
                            </span>
                        </button> */}
                    </div>
                </div>
                ))
                }

                
            </div>

        </div>
    </div>
  )
}

export default Portfolio