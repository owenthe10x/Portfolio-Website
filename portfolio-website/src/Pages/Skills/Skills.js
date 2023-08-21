import Header from '../../Components/UI/Header'
import SkillsCard from './Components/SkillsCard'
import skillData from './Components/skillData'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Skills = () => {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<div data-aos='fade-up'>
			<Header title1="Skill" title2="s" description="Here's a comprehensive list of my skills, encompassing both programming-related and unrelated expertise." />
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{skillData.map((skill) => (
					<SkillsCard
						name={skill.name}
						desc={skill.desc}
						expertise={skill.expertise}
						illustration={skill.illustration}
					/>
				))}
			</div>
		</div>
	)
}

export default Skills
