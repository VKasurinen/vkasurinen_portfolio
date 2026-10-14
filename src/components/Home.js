import React from 'react'
import kuva222 from "../assets/kuva222.jpg";

import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home"
    className="flex min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-10 w-full px-4 pt-28 pb-16 md:flex-row md:gap-12 md:pt-20 md:pb-0">
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white">I'm a Software Developer</h2>
                <p className="mt-4 text-gray-300 sm:text-lg">
                    I'm a software developer based in Oulu, Finland.
                    I like to work on web and mobile applications with technologies like
                    React, Kotlin, Next and Java
                </p>

                <div>
                    <Link to='projects' smooth={500} offset={-80} className=" group text-white w-fit px-6 py-3 mt-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Projects

                        <span className="group-hover:translate-x-4 duration-300">
                        <MdOutlineKeyboardArrowRight size={20}  className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="shrink-0">
                <img src={kuva222} alt="my profile" className="rounded-2xl mx-auto w-56 sm:w-64 md:w-80 object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Home
