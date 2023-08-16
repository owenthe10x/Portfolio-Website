import Header from '../../Components/UI/Header'
import SkillsCard from './Components/SkillsCard'
import skillData from './Components/skillData'
const Skills = () => {
	return (
		<>
			<Header title1="Skill" title2="s" description="" />
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{skillData.map((skill) => (
					<SkillsCard
						name={skill.name}
						desc={skill.desc}
						percentage={skill.percentage}
						illustration={skill.illustration}
					/>
				))}
			</div>
		</>
	)
}

export default Skills
