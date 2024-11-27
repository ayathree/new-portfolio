

import { ReactTyped } from 'react-typed'
import './App.css'
import portfolioImage from './assets/file.png'

function App() {
  

  return (
    <div className='bg-neutral-900 min-h-screen grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 p-6 gap-6'>
      <div className='  border-2 border-orange-600   lg:row-span-2 h-full flex justify-center items-center block lg:hidden '>
        <img className='bg-black p-2 h-full w-full object-cover ' src={portfolioImage} alt="" />
      </div>
      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl border-2 border-orange-600 '>about <span className='text-orange-600'>me</span></div>
      <div className='uppercase  text-white font-bold text-3xl text-center flex justify-center items-center  '>Nobanita <span className='text-orange-600'> ayathree</span></div>
      <div className='border-2 border-orange-600 text-center lg:row-span-2 h-full flex justify-center items-center hidden lg:block relative'>
  <img className='bg-black p-2 h-full w-full object-cover' src={portfolioImage} alt="" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/70 to-transparent"></div>
  <div className='absolute inset-0 flex flex-col justify-center items-center'>
    <ReactTyped
      className='uppercase font-bold text-xs md:text-2xl lg:text-3xl text-white text-center'
      strings={[
        "Search for products",
        "Search for categories",
        "Search for brands",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text" className="bg-transparent text-white text-center  outline-none placeholder:text-white" />
    </ReactTyped>
  </div>
</div>

      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl border-2 border-orange-600 '>my <span className='text-orange-600'>portfolio</span></div>
      <div className='flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl border-2 border-orange-600'>get <span className='text-orange-600'>in touch</span></div>
      

    </div>
  )
}

export default App
