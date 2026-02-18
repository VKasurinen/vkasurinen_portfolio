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
            Hi, I'm a 23-year-old computer science student.
            After upper secondary school, I was interested in
            making software and coding in general, and
            because of this, I am now studying computer
            science for the fifth year
            </p>
            <br />
            <p className="text-xl">
            By nature, I am
            determined, calm and confident. I like to work in
            teams, and I am very motivated to try my skills on
            the software development side. I'm not afraid to
            work under pressure, and if I need to learn
            something I've usually learned it and completed the
            required task. So, I am quick learner and open to
            new information.
            </p>
        </div>
    </div>
  )
}

export default About