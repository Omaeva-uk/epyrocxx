import { projectsData } from "../../data/data";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      {
        projectsData.map((item, i) => (
          <div key={i} className="flex justify-between  items-center  flex-wrap">
            <div data-aos="fade-right">
              <p className="font-Exo uppercase tracking-wider text-section ">{item.sectionName}</p>
              <h2 className="font-GoodTiming text-4xl text-h2 lg:text-6xl max-w-lg mt-2 mb-6">{item.sectionTitle}</h2>
              <p className="font-Exo text-gray-900">{item.sectionSubheadline}</p>
            </div>
            <div data-aos="fade=left" className="max-w-xl font-Exo space-y-5">
              <p>{item.sectionPara1}</p>
              
            </div>
          </div>
          
        ))
      }
      <div data-aos="fade-up" className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[233px] gap-7 mt-32 grid-image">
        <Link to="" className="project-1"><div ><img src="/assets/project-grid-1.png"  alt="Project image" /></div></Link>
        <Link to="" className="project-2"><div ><img src="/assets/project-grid-2.png" alt="Project image" /></div></Link>
        <Link to="" className="project-3"><div ><img src="/assets/project-grid-3.png" alt="Project image" /></div></Link>
        <Link to="" className="project-4"><div ><img src="/assets/project-grid-4.png" alt="Project image" /></div></Link>
        <Link to="" className="project-5"><div ><img src="/assets/project-grid-5.png" alt="Project image" /></div></Link>
        <Link to="" className="project-6"><div ><img src="/assets/project-grid-6.png" alt="Project image" /></div></Link>
      </div>
        
    </div>
  )
}

export default Projects;