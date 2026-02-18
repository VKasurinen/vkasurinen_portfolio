import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillPersonFill} from "react-icons/bs"


const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
        LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/v%C3%A4in%C3%B6-kasurinen-75b006251/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
        GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/VKasurinen',
      style: ''
    },
    {
      id: 3,
      child: (
        <>
        CV <BsFillPersonFill size={30} />
        </>
      ),
      href: 'Väinö_Kasurinen_CV.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]


  return ( 
    //flex flex-row top-[85%] left-0 start-10 fixed

    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {links.map(({id, child, href, style, download}) => (

              <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-teal-900" 
              + " " + style }> 

              <a href={href} className="flex justify-between items-center w-full text-white" 
              download={download} 
              target='_blank'
              rel="noreferrer">
              
              {child}

              </a>
              </li>

            ))}

        </ul>
    </div>
  )
}

export default SocialLinks