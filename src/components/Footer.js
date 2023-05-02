import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (

    <footer name="footer" className="p-32 leading-6 bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="w-full h-52 m-auto">
                <div className="flex flex-wrap">

                    <div className="w-1/2 text-center p-4">
                        <h4 className="text-xl">Contact</h4>
                        <ul>
                            <li>
                                +358 449750078
                            </li>
                            <li>
                                vaino.kasurinen@hotmail.fi
                            </li>
                            <li>
                                Oulu, Pohjois-Pohjanmaa
                            </li>

                        </ul>
                    </div>

                    <div className="w-1/2 text-center p-4">
                        <h4 className="text-4xl text-white mb-16 relative">LinkedIn</h4>

                        <div className="">
                            
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/v%C3%A4in%C3%B6-kasurinen-75b006251/" 
                            className="inline-block h-12 w-12 items-center justify-center my-2 m-6 text-center leading-10 border-solid border rounded-sm hover:bg-neutral-400 duration-300">
                              <FaLinkedin className="w-full h-full" />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-4/5 m-auto pt-3 border-b border-solid pb-3"></div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full m-auto py-2 text-center">
                        <p>© Väinö Kasurinen</p>
                    </div>
                </div>

            </div>
        </footer>
    // <footer>
    //     <div>
    //       <div className="flex items-center justify-center m-auto">
    //         <h1>Follow me</h1>
    //         <div className="items-baseline">
    //         <a href="https://www.linkedin.com/in/v%C3%A4in%C3%B6-kasurinen-75b006251/" target="_blank" rel="noreffer" className="flex justify-between items-center w-full text-white">
                
    //             <FaLinkedin className="text-black"/>
    //         </a>
    //         </div>
    //       </div>
    //     </div>
    // </footer>

    // <div name ="footer" className='w-full h-52 bg-gradient-to-b from-gray-800 to-black text-white'>
    //     <div className='max-w-screen-lg p-4 mx-auto flex flex-row justify-center w-full h-full items-center'>
    //         <h1 className="text-xl">Follow me</h1>

    //         <div className="py-8 my-11">
    //             <a href="https://www.linkedin.com/in/v%C3%A4in%C3%B6-kasurinen-75b006251/" target="_blank">
                
    //                 <FaGithub className="text-black"/>
    //             </a>
    //         </div>
    //     </div>
        

    // </div>
  )
}

export default Footer