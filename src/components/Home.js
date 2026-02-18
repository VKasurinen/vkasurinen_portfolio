import React from 'react'
//import kuva2 from "..assets/images/unknown.png";
import kuva222 from "../assets/kuva222.jpg";

import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';

//from-black to-gray-800


const Home = () => {
  return (
    <div name="home" 
    className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Software Developer</h2>
                <p>
                    I'm a fifth year computer science student. 
                    Currently, I like to work on web and mobile applications with technologies like
                    React, Kotlin, Next and Java
                </p>

                <div>
                    <Link to='projects' smooth={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Projects
                        
                        <span className="group-hover:translate-x-4 duration-300">
                        <MdOutlineKeyboardArrowRight size={20}  className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={kuva222} alt="my profile" className="rounded-2xl mx-auto w-2/3 object-cover h-70 w-98"/> 
            </div>
        </div>
    </div>
  )
}

export default Home