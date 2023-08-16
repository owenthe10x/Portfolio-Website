import Header from '../../Components/UI/Header'
import { projectData } from './Components/projectData'
import ProjectsCard from './Components/ProjectsCard'

const Projects = () => {
	return (
		<>
			<Header title1="Pro" title2="jects" description="" />
			<div className='flex flex-wrap gap-5 mx-5 justify-center'>
				{projectData.map((project) => (
					<ProjectsCard
						title={project.title}
						desc={project.desc}
						date={project.date}
						link={project.link}
						repository={project.repository}
						category = {project.category}
					/>
				))}
			</div>
		</>
	)
}

export default Projects
