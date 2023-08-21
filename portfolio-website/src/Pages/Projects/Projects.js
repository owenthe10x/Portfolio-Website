import Header from '../../Components/UI/Header'
import {projectData} from './Components/projectData'
import ProjectsCard from './Components/ProjectsCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Projects = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div data-aos="fade-up">
			<Header
				title1="Pro"
				title2="jects"
				description="This is a compilation of my programming projects, showcasing the practical application of my skills and the innovative solutions I've crafted."
			/>
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{projectData.map((project) => (
					<ProjectsCard
						title={project.title}
						desc={project.desc}
						date={project.date}
						link={project.link}
						repository={project.repository}
						category={project.category}
						tech={project.tech}
					/>
				))}
			</div>
		</div>
	)
}

export default Projects
