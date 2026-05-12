import React from 'react'

//from-gray-800 to-black


const About = () => {
  return (
    <div name ="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
            Hi, I'm a software developer from Oulu with a
            passion for building web and mobile applications.
            My interest in software development started after
            upper secondary school and has driven me to
            complete a Master's degree in Software Development
            at the University of Oulu.
            </p>
            <br />
            <p className="text-xl">
            By nature, I am determined, calm and confident.
            I enjoy working in teams and take ownership of
            my work. I adapt quickly to new challenges and
            am always open to learning new technologies and
            approaches.
            </p>
        </div>
    </div>
  )
}

export default About