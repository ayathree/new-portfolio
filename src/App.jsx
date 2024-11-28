import { ReactTyped } from 'react-typed';
import './App.css';
import portfolioImage from './assets/file.png';
import Lottie from 'lottie-react';
import animation from './assets/Animation - 1732779013753.json';
import { useState } from 'react';
import { BsPersonVcardFill } from 'react-icons/bs';
import { GoPersonFill } from 'react-icons/go';
import { FaDownload, FaStar } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(true);  
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [activeButton, setActiveButton] = useState('education'); 

  const handleButtonClick = (button) => {
    setActiveButton(button);

    if (button === 'education') {
      setShowSecondModal(true);
      setShowThirdModal(false);
    } else {
      setShowSecondModal(false);
      setShowThirdModal(true);
    }
  }

  return (
    <div className="bg-neutral-900 min-h-screen grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2 p-6 gap-6 relative">
      {/* Static Image Section */}
      <div className="text-center lg:row-span-2 h-full flex justify-center items-center hidden lg:block relative">
        <img
          className="bg-black h-full w-full object-cover"
          src={portfolioImage}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Lottie className="w-1/2" animationData={animation}></Lottie>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center cursor-default">
        <p className="text-white text-center text-xs lg:text-2xl uppercase mb-2">
          Hi there! I'm
        </p>
        <p className="text-white text-center text-2xl lg:text-4xl font-bold uppercase mb-2">
          nobanita ayathree
        </p>
        <ReactTyped
          strings={["Web Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
          className="uppercase text-orange-400 text-center text-xs lg:text-2xl font-bold"
        />
      </div>

      {/* Buttons Section */}
      <div
        className="flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover:border-r-orange-400"
        onClick={() => setShowModal(true)}
      >
        about <span className="text-orange-400">me</span>
      </div>

      <div className="flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover:border-r-orange-400">
        my <span className="text-orange-400">portfolio</span>
      </div>

      <div className="flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover:border-r-orange-400">
        get <span className="text-orange-400">in touch</span>
      </div>

      {/* Modal 1 */}
      {showModal && (
  <div className=''>
    <div className="absolute inset-0 flex justify-center items-center  bg-black/70 z-10">
    <div className="bg-neutral-800 p-3 lg:p-6 lg:w-2/3 m-3 max-h-[90vh] overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-white text-center">
   
     
      <button
        className="absolute top-10 lg:right-12 right-2 text-white  text-3xl"
        onClick={() => setShowModal(false)}
      >
       <RxCross1 />
      </button>
     <h2 className="lg:text-6xl text-2xl text-white font-bold mb-4">About <span className='text-orange-400'>Me</span></h2>
    
      {/* div 1 */}
      <div className='flex flex-row justify-center items-center gap-4 mt-5 lg:mt-10'>
        <hr className='w-1/2 border-t-2 border-white' />
        <BsPersonVcardFill className='text-2xl text-orange-400' />
        <hr className='w-1/2 border-t-2 border-white' />
      </div>
      {/* medium screen */}
      <div className='flex flex-col md:flex-row justify-start items-start gap-10 '>
        {/* image for small screen */}
      <div className='mt-10 block lg:hidden '>
        <img src={portfolioImage} className='bg-black md:w-[2000px]' alt="" />
      </div>
      <div>
        {/* div 2 */}
    
      <div className='md:mt-10 flex flex-row justify-start items-start gap-2 '>
      <GoPersonFill className='text-white text-2xl' />
      <p className='text-white text-xl uppercase'> Personal Info</p>
      </div>
      {/* div 3 */}
      <div className='mt-5 text-white text-xm text-start'>
        <p>I am a web developer passionate about building accessible websites that users love. Dedicated front-end web developer with a solid foundation in web development, driven by a passion for creative problem-solving in projects. Adept at creating aesthetically pleasing and responsive websites with a love for creating seamless user experiences.</p>

      </div>
      {/* div 3 */}
      <div className='lg:mt-5 mt-10 flex lg:flex-row flex-col justify-start items-start lg:gap-20 '>
        <div >
          <ol className='text-start'>
            <li className='uppercase text-white text-xs mb-3'><span className='font-bold'>first name :</span> Nobanita</li>
            <li className='uppercase text-white text-xs mb-3'><span className='font-bold'>last name :</span> Ayathree</li>
            <li className='uppercase text-white text-xs mb-3'><span className='font-bold'>date of birth :</span> 5 january 2000</li>
          </ol>
        </div>
        <div>
        <ol className='text-start'>
            <li className='uppercase text-white text-xs mb-3'><span className='font-bold'>phone :</span> +880-1862986204</li>
            <li className=' text-white  mb-3'><span className='font-bold uppercase text-xs'>email :</span> <span className='text-xm'>nobanitaayathree333@gmail.com</span></li>
            <li className='uppercase text-white text-xs mb-3'><span className='font-bold'>spoken languages :</span> Bengali - English</li>
          </ol>
        </div>
      </div>
      {/* div 4 */}
      <div className='mt-10'>
        <button className='bg-orange-400 text-white font-semibold text-xl uppercase flex justify-center items-center gap-2 p-3 ' >download resume <FaDownload className='text-white' /></button>
      </div>
      </div>
      </div>
      {/* div 5 */}
      <hr className='mt-10' />
      {/* div 6 */}
     <div className='hidden lg:block'>
     <div className='mt-20 flex flex-row justify-between items-center gap-10  '>
        <div className='flex flex-col justify-center items-center gap-5 flex-1'>
        <button className={`outline text-white font-semibold text-xl uppercase flex justify-start items-center gap-2 px-5 py-3 w-full ${activeButton === 'education' ? 'bg-orange-400 outline-0' : ''}`}
        onClick={() => handleButtonClick('education')}><RiGraduationCapFill className='text-white' />education</button>
        <button className={`outline text-white font-semibold text-xl uppercase flex justify-start items-center gap-2 px-5 py-3 w-full ${activeButton === 'skills' ? 'bg-orange-400 outline-0' : ''}`} 
        onClick={() => handleButtonClick('skills')}> <FaStar className='text-white' />skills</button>
        </div>
        <div>
          {/* part div 1 */}
        {
          showSecondModal && <div className="hero bg-base-200 min-h-screen ">
          <div className="hero-content text-center ">
            <div >
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        }
{/* part div 2 */}
{
  showThirdModal && <div className="hero bg-base-200 min-h-screen  ">
  <div className="hero-content text-center ">
    <div >
      <h1 className="text-5xl font-bold">bye there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
}
        </div>
      </div>
     </div>
     {/* div 7 for small screen */}
     <div className='block lg:hidden'>
      {/* sun div 7 */}
     <div className="hero bg-black min-h-screen mt-10 ">
          <div className="hero-content text-center ">
            <div >
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* sub div 7 */}
        <div className="hero bg-black min-h-screen mt-10 ">
          <div className="hero-content text-center ">
            <div >
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
     </div>

      
      <p className="text-gray-700">
       
      </p>
      
    </div>
  </div>
  </div>
)}

    </div>
  );
}

export default App;
