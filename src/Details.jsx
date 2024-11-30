const Details = ({ project }) => {
    const {
      projectName,
      projectDescription,
      projectLiveLink,
      projectServerLink,
      projectClientLink,
      projectImage,
      projectFeatures,
      usedTechnologies,
    } = project;
  
    return (
      <div>
        
        <img className="w-full h-auto mb-4 uppercase" src={projectImage} alt={projectName} />
        <h2 className="text-2xl text-white font-bold m-4">{projectName}</h2>
        <p className="mb-4 text-white uppercase ">{projectDescription}</p>
        <div className="flex justify-center items-center gap-4">
         
          <a
            href={projectClientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline "
          >
           <button className="bg-yellow-600 px-2 p-1 hover:outline"> Github Client</button>
          </a>
          <a
            href={projectServerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
           <button className="bg-blue-600 px-2 p-1 hover:outline"> Github Server</button>
          </a>
          <a
            href={projectLiveLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" underline text-white font-bold"
          >
           <button className="bg-green-600 px-6 p-1 hover:outline text-xl"> Live Site</button>
          </a>
        </div>
        
        <h3 className="font-semibold mt-5 lg:mt-0 mb-2 text-white flex  justify-start items-start text-lg uppercase underline ">Features:</h3>
        <ul className="list-disc list-inside mb-4 text-start  ">
          {projectFeatures.map((feature, index) => (
            <li className="text-white " key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2 text-white flex  justify-start items-start text-lg uppercase underline ">Used Technologies:</h3>
        <ul className="list-disc list-inside mb-4 text-start">
          {usedTechnologies.map((tech, index) => (
            <li className="text-white " key={index}>{tech}</li>
          ))}
        </ul>
        
      </div>
    );
  };
  
  export default Details;
  