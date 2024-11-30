import { ReactTyped } from 'react-typed';
import emailjs from "emailjs-com";
import './App.css';
import portfolioImage from './assets/file.png';
import Lottie from 'lottie-react';
import animation from './assets/Animation - 1732779013753.json';
import { useEffect, useState } from 'react';
import { BsPersonVcardFill } from 'react-icons/bs';
import { GoPersonFill } from 'react-icons/go';
import {  FaComments, FaCss3Alt, FaDownload, FaFigma, FaGit, FaGithub, FaHtml5,  FaLinkedinIn, FaLocationArrow, FaNodeJs, FaReact, FaRegCalendar, FaStar, FaSuitcase } from 'react-icons/fa';
import { RiFirebaseFill, RiGraduationCapFill, RiTailwindCssFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { IoLogoJavascript, IoMdMail } from 'react-icons/io';
import { SiExpress, SiMongodb, SiVercel } from 'react-icons/si';
import {  IoMailOpenSharp, IoPerson } from 'react-icons/io5';
import resume from './assets/Nobanita Ayathree Resume.pdf'
import Details from './Details';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(true);  
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [activeButton, setActiveButton] = useState('education'); 
  const [getInTouchModal, setGetInTouchModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const[modalMessage, setModalMessage] = useState('');
  const[myPortfolioModal,setMyPortfolioModal]=useState(false);

  // for project
  const[projects,setProjects]=useState([]);

  useEffect(()=>{
    fetch('projects.json')
    .then(res=> res.json())
    .then(data=>setProjects(data))
  },[])
  const [selectedProject, setSelectedProject] = useState(null);

  // FOR sending email
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_e2krris",      // Replace with your EmailJS service ID
        "template_l7qcoec",     // Replace with your EmailJS template ID
        {
            name: formData.name,
            email: formData.email, // Will be used as reply_to
            message: formData.message,
          },
        "win_flOAaCkkJDyqS"          // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData({ name: "", email: "", message: "" });
          setModalMessage("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setModalMessage("There was an error. Please try again.");
        }
      );
  };

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

      <div className="flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover:border-r-orange-400" onClick={()=> setMyPortfolioModal(true)}>
        my <span className="text-orange-400">portfolio</span>
      </div>

      <div className="flex justify-center items-center uppercase bg-neutral-800 text-center text-white font-bold text-3xl hover:border-b-2 hover:border-r-2 cursor-pointer hover:border-r-orange-400" onClick={()=> setGetInTouchModal(true)}>
        get <span className="text-orange-400" >in touch</span>
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
     <h2 className="lg:text-6xl text-2xl text-white font-bold mb-4 uppercase">About <span className='text-orange-400'>Me</span></h2>
    
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
      <a href={resume} download="Nobanita Ayathree Resume.pdf"><button className='bg-orange-400 text-white font-semibold text-xl uppercase flex justify-center items-center gap-2 p-3 ' >download resume <FaDownload className='text-white' /></button></a>
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
          showSecondModal && <div className=" bg-neutral-800 min-h-screen border-white border-2   ">
          <div className="  ">
            <div >
              <div className='bg-black'>
              <h1 className="text-3xl font-bold uppercase text-orange-400 flex justify-center items-center gap-2 pt-10">education <RiGraduationCapFill></RiGraduationCapFill></h1>
              <hr className='text-3xl font-bold bg-white mt-10' />
              </div>
              
              <div className='mt-10 px-8'>
                <p className="text-white text-lg text-start uppercase"><span className='font-bold'>Bachelor Degree -</span> premier university, chittangong
                </p>
              <p className="text-white text-start mt-2 flex justify-start items-center gap-2"><FaRegCalendar />
               2019-2024   
              </p>
              <p className='text-white text-start mt-2 uppercase'>computer science and engineering  
              </p>
              <p className='text-xs text-white text-start mt-2'>During my studies, I focused on programming, data structures, and software development. My education equipped me with a strong foundation in front-end technologies, while I am currently enhancing my skills in back-end development.</p>
              <hr className='mt-7 text-start w-1/4  ' />
              
              </div>
            
            </div>
          </div>
        </div>
        }
{/* part div 2 */}
{
  showThirdModal && <div className=" bg-neutral-800 min-h-screen border-white border-2    ">
  <div className="  ">
    <div >
      <div className='bg-black'>
      <h1 className="text-3xl font-bold uppercase text-orange-400 flex justify-center items-center gap-2 pt-10">skills <FaStar></FaStar></h1>
      <hr className='text-3xl font-bold bg-white mt-10' />
      </div>
      <div className='mt-5'>
        <p className='text-white text-start px-5'>Here are the technologies and tools I excel at, which enable me to craft robust and user-friendly web applications.</p>
      </div>
  <div className=' px-5 grid grid-cols-2 grid-rows-6 justify-start items-start gap-5 py-5 '>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaCss3Alt className='text-orange-400' />CSS</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaHtml5 className='text-orange-400' />HTML</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><IoLogoJavascript className='text-orange-400' />JavaScript</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaReact className='text-orange-400' />ReactJS</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><SiMongodb className='text-orange-400' />MongoDB</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaNodeJs className='text-orange-400' />NodeJS</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><SiExpress className='text-orange-400' />ExpressJS</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><RiFirebaseFill className='text-orange-400'/>Firebase</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaFigma className='text-orange-400' />Figma</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><FaGit className='text-orange-400' />Git</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><SiVercel className='text-orange-400' />Vercel</div>
        <div className='flex justify-start items-center gap-2 text-white font-bold text-xl'><RiTailwindCssFill className='text-orange-400' />Tailwind CSS</div>
      
      </div>
    
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
      <div className=" bg-neutral-800 min-h-screen border-white border-2   ">
          <div className="  ">
            <div >
              <div className='bg-black'>
              <h1 className="text-3xl font-bold uppercase text-orange-400 flex justify-center items-center gap-2 pt-10">education <RiGraduationCapFill></RiGraduationCapFill></h1>
              <hr className='text-3xl font-bold bg-white mt-10' />
              </div>
              
              <div className='mt-10 px-8'>
                <p className="text-white lg:text-lg  text-start uppercase"><span className='font-bold'>Bachelor Degree -</span> premier university, chittangong
                </p>
              <p className="text-white text-start mt-2 flex justify-start items-center gap-2"><FaRegCalendar />
               2019-2024   
              </p>
              <p className='text-white text-start mt-2 uppercase text-xm '>computer science and engineering  
              </p>
              <p className='text-xs text-white text-start mt-2'>During my studies, I focused on programming, data structures, and software development. My education equipped me with a strong foundation in front-end technologies, while I am currently enhancing my skills in back-end development.</p>
              <hr className='mt-7 text-start w-1/4  ' />
              
              </div>
            
            </div>
          </div>
        </div>
        {/* sub div 7 */}
        <div className=" bg-neutral-800 min-h-screen border-white border-2 mt-5   ">
  <div className="  ">
    <div >
      <div className='bg-black'>
      <h1 className="text-3xl font-bold uppercase text-orange-400 flex justify-center items-center gap-2 pt-10">skills <FaStar></FaStar></h1>
      <hr className='text-3xl font-bold bg-white mt-10' />
      </div>
      <div className='mt-5 hidden lg:block'>
        <p className='text-white text-start px-5'>Here are the technologies and tools I excel at, which enable me to craft robust and user-friendly web applications.</p>
      </div>
  <div className=' px-5 grid grid-cols-2 grid-rows-6 justify-start items-start gap-5 py-5 '>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaCss3Alt className='text-orange-400' />CSS</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaHtml5 className='text-orange-400' />HTML</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><IoLogoJavascript className='text-orange-400' />JavaScript</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaReact className='text-orange-400' />ReactJS</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><SiMongodb className='text-orange-400' />MongoDB</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaNodeJs className='text-orange-400' />NodeJS</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><SiExpress className='text-orange-400' />ExpressJS</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><RiFirebaseFill className='text-orange-400'/>Firebase</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaFigma className='text-orange-400' />Figma</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><FaGit className='text-orange-400' />Git</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><SiVercel className='text-orange-400' />Vercel</div>
        <div className='flex justify-start items-center gap-2 text-white lg:font-bold lg:text-xl'><RiTailwindCssFill className='text-orange-400' />Tailwind CSS</div>
      
      </div>
    
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
{/* Modal 2 */}
{getInTouchModal && (
        <div className="absolute inset-0 flex justify-center items-center bg-black/70 z-10">
          <div className="bg-neutral-800 p-3 lg:p-6 lg:w-2/3 m-3 max-h-[90vh] overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-white text-center">
          

          <button
        className="absolute top-10 lg:right-12 right-2 text-white  text-3xl"
        onClick={() => setGetInTouchModal(false)}
      >
       <RxCross1 />
      </button>
     <h2 className="lg:text-6xl text-2xl text-white font-bold mb-4 uppercase">Get <span className='text-orange-400'>In Touch</span></h2>
    
      {/* div 1 */}
      <div className='flex flex-row justify-center items-center gap-4 mt-5 lg:mt-10'>
        <hr className='w-1/2 border-t-2 border-white' />
        <IoMailOpenSharp className='text-2xl text-orange-400' />
        <hr className='w-1/2 border-t-2 border-white' />
      </div>
      
           
           <div className='flex md:flex-row flex-col justify-center items-center gap-10 mt-10'>
            {/* social div */}
            <div className='bg-black p-7 flex flex-col justify-start items-start gap-3'>
              <p className='text-orange-400 font-bold text-2xl uppercase '>phone</p>
              <p className='text-white '>+880-1862986204</p>
              <p className='text-orange-400 font-bold text-2xl uppercase '>email</p>
              <p className='text-white '>nobanitaayathree333@gmail.com</p>
              <p className='text-orange-400 font-bold text-2xl uppercase '>address</p>
              <p className='text-white '>Chattogram, bangladesh</p>
              <p className='text-orange-400 font-bold text-2xl uppercase '>social profiles</p>
              <div className='flex flex-row justify-center items-center gap-5'>
              
             <a href="https://www.linkedin.com/in/nobanitaayathree/"><FaLinkedinIn  className='text-3xl text-white bg-blue-600 p-1 ' href='' /></a>
              <a href="https://github.com/ayathree"> <FaGithub className='text-3xl text-white '  /></a>
              </div>

            </div>
            {/* form div */}
            <div>
            <p className='text-xl font-bold text-white uppercase  text-start'>Feel free to drop me a line</p>
            <p className="text-white my-5 text-base text-start">
            If you have any suggestion, project or even you want to say Hello.... Please fill out the form below and I will reply you shortly.
            </p>
            <form onSubmit={sendEmail}>
            {/* div 1 */}
            <div className='flex flex-row justify-start items-center gap-2'>
            <IoPerson className='text-white text-3xl' />
            <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-2  p-2 rounded border border-gray-400"
        />
            </div>
            {/* div 2 */}
           <div className='flex flex-row justify-start items-center gap-2'>
           <IoMdMail className='text-white text-3xl' />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-2 p-2 rounded border border-gray-400"
        />
           </div>
           {/* div 3 */}
           <div className='flex flex-row justify-start items-center gap-2' >
           <FaComments className='text-white text-3xl'/>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mb-2 p-2 rounded border border-gray-400"
        ></textarea>
           </div>
           
        {/* div 4 */}
        <div className='flex flex-row justify-center items-center gap-2 mt-5'>
        <button
          type="submit"
          className="w-1/2 bg-green-500  text-white py-2 rounded hover:bg-green-600 flex flex-row justify-center items-center gap-2"
        >
          Send Email
          <FaLocationArrow className='text-white text-xl' />
        </button>
        </div>
       
          
    </form>
            </div>
           </div>
          
            
          </div>
        </div>
      )}
      {/* Modal for success or error message */}
{modalMessage && (
  <div className="absolute inset-0 flex justify-center items-center bg-black/70 z-20">
    <div className="bg-black p-6 rounded-lg text-center border-white border-2 max-w-sm w-full">
      <p className="text-lg text-white font-bold mb-4">{modalMessage}</p>
      <button
        className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
        onClick={() => setModalMessage("")}
      >
        Close
      </button>
    </div>
  </div>
)}

{/* Modal 3 */}
{myPortfolioModal && (
  <div className=''>
    <div className="absolute inset-0 flex justify-center items-center  bg-black/70 z-10">
    <div className="bg-neutral-800 p-3 lg:p-6 lg:w-2/3 m-3 max-h-[90vh] overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-white text-center">
   
     
      <button
        className="absolute top-10 lg:right-12 right-2 text-white  text-3xl"
        onClick={() => setMyPortfolioModal(false)}
      >
       <RxCross1 />
      </button>
     <h2 className="lg:text-6xl text-2xl text-white font-bold mb-4 uppercase">My <span className='text-orange-400'>Portfolio</span></h2>
    
      {/* div 1 */}
      <div className='flex flex-row justify-center items-center gap-4 mt-5 lg:mt-10'>
        <hr className='w-1/2 border-t-2 border-white' />
        <FaSuitcase  className='text-2xl text-orange-400' />
        <hr className='w-1/2 border-t-2 border-white' />
      </div>
      <p className='my-3 text-white uppercase'>Tap the Project's images.</p>
      {/*display projects  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 mt-10">
  {projects.map((project) => (
    <div key={project.id} className="relative group cursor-pointer"   onClick={() => setSelectedProject(project)}>
      {/* Image */}
      <img
        className="h-[30vh] w-full object-cover"
        src={project.projectImage}
        alt=""
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
     {/* Text */}
     <div
        className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {project.projectName}
      </div>
    </div>
  ))}
  {/* Modal */}
{selectedProject && (
        <div className="absolute inset-0 flex justify-center items-center  bg-black/70 z-10">
          <div className="bg-neutral-800 p-3 lg:p-6 lg:w-2/3 m-3 max-h-[90vh] overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-white text-center">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2  text-white px-2 py-1 rounded"
              onClick={() => setSelectedProject(null)} // Close modal
            >
             <RxCross1 className='bg-red-600 text-white font-bold' />
            </button>
            {/* Project Details */}
            <Details project={selectedProject} />
          </div>
        </div>
      )}
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
