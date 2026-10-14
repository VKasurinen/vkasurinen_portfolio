import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillPersonFill} from "react-icons/bs"
import {HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker} from "react-icons/hi"

const Footer = () => {

  const contacts = [
    {
      id: 1,
      icon: <HiOutlinePhone size={20} />,
      text: '+358 449750078',
      href: 'tel:+358449750078',
    },
    {
      id: 2,
      icon: <HiOutlineMail size={20} />,
      text: 'vaino.kasurinen@hotmail.fi',
      href: 'mailto:vaino.kasurinen@hotmail.fi',
    },
    {
      id: 3,
      icon: <HiOutlineLocationMarker size={20} />,
      text: 'Oulu, Pohjois-Pohjanmaa',
    },
  ]

  const socials = [
    {
      id: 1,
      icon: <FaLinkedin size={22} />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/v%C3%A4in%C3%B6-kasurinen-75b006251/',
    },
    {
      id: 2,
      icon: <FaGithub size={22} />,
      text: 'GitHub',
      href: 'https://github.com/VKasurinen',
    },
    {
      id: 3,
      icon: <BsFillPersonFill size={22} />,
      text: 'CV',
      href: 'Väinö_Kasurinen_CV.pdf',
      download: true,
    },
  ]

  return (
    <footer name="footer" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg mx-auto px-4 pt-20 pb-8">

        <div className="grid gap-12 md:grid-cols-2 text-center">

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <ul className="mt-8 space-y-4 text-left">
              {contacts.map(({id, icon, text, href}) => (
                <li key={id} className="flex items-center gap-3 text-gray-300">
                  <span className="text-teal-500">{icon}</span>
                  {href ? (
                    <a href={href} className="hover:text-white duration-200 break-all">{text}</a>
                  ) : (
                    <span>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">Connect</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socials.map(({id, icon, text, href, download}) => (
                <a key={id} href={href} target="_blank" rel="noreferrer" download={download}
                className="flex items-center gap-3 px-5 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-200 hover:text-white hover:border-teal-500 hover:bg-teal-900 duration-200">
                  {icon}
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Väinö Kasurinen</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
