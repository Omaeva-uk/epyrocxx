import { projectsData } from "../../data/data";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      {
        projectsData.map((item, i) => (
          <div key={i} className="flex justify-between  items-center  flex-wrap">
            <div>
              <p className="font-Lato uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-Estoria text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Luxenta text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div className="max-w-xl font-Luxenta space-y-5">
              <p>{item.sectionPara1}</p>
              
            </div>
          </div>
          
        ))
      }
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[233px] gap-7 mt-32 grid-image">
        <div className="project-1"><img src="/assets/project-grid-1.png"  alt="Project image" /></div>
        <div className="project-2"><img src="/assets/project-grid-2.png" alt="Project image" /></div>
        <div className="project-3"><img src="/assets/project-grid-3.png" alt="Project image" /></div>
        <div className="project-4"><img src="/assets/project-grid-4.png" alt="Project image" /></div>
        <div className="project-5"><img src="/assets/project-grid-5.png" alt="Project image" /></div>
        <div className="project-6"><img src="/assets/project-grid-6.png" alt="Project image" /></div>
      </div>
        
    </div>
  )
}

export default Projects;