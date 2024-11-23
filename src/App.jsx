
import './App.css'
import portfolioImage from './assets/file.png'

function App() {
  

  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 bg-neutral-900 lg:h-[100vh] justify-between items-center gap-2 '>
      {/* 1st div */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-2 m-8 '>
        {/* 2nd div */}
        <div className='grid grid-cols-1 justify-between items-center gap-2'>
          {/* 3rd div */}
          <div className="card bg-neutral-700 text-primary-content md:w-96 m-5 ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-neutral-700 text-primary-content md:w-96 m-5 ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div className='grid grid-cols-1 justify-between items-center gap-2'>
          {/* 4th div */}
          <div className="card bg-neutral-800 text-primary-content md:w-96 m-5 ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-neutral-700 text-primary-content md:w-96 m-5 ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>

        </div>

      </div>
      <div className='flex justify-center items-center  '>
        <img className='h-[90vh] bg-black p-4  ' src={portfolioImage} alt="" />
      </div>
    </div>
  )
}

export default App
