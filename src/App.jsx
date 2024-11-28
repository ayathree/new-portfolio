

import { ReactTyped } from 'react-typed'
import './App.css'
import portfolioImage from './assets/file.png'
import Lottie from 'lottie-react'
import animation from './assets/Animation - 1732779013753.json'

function App() {
  

  return (
    <div className='bg-neutral-900 min-h-screen grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 p-6 gap-6'>
     <div className='  text-center  lg:row-span-2 h-full flex justify-center items-center hidden lg:block  relative'>
  <img className='bg-black  h-full w-full object-cover' src={portfolioImage} alt="" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/70 to-transparent"></div>
  <div className='absolute  inset-0 flex justify-center items-center'>
  <Lottie className=' w-1/2 ' animationData={animation}></Lottie>
  </div>
</div>

<div className="flex flex-col justify-center items-center cursor-default">
  {/* Display "Nobanita Ayathree" */}
  <p className="text-white text-center text-xs lg:text-2xl  uppercase mb-2" >Hi there ! i'm</p>
  <p 
    className="text-white text-center text-2xl lg:text-4xl font-bold uppercase mb-2"
  >nobanita ayathree
    </p>
 

  {/* Display "Web Developer" */}
  <ReactTyped
    strings={["Web Developer"]}
    typeSpeed={40}
    backSpeed={50}
    loop
    className="uppercase text-orange-400 text-center text-xs  lg:text-2xl font-bold"
  />
</div>

      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover: border-r-orange-400  '>about <span className='text-orange-400 '>me</span></div>
      
      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl  hover:border-b-2 hover:border-r-2 cursor-pointer hover: border-r-orange-400  '>my <span className='text-orange-400'>portfolio</span></div>
      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover: border-r-orange-400 '>get <span className='text-orange-400'>in touch</span></div>
      

    </div>
  )
}

export default App
