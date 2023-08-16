import Header from '../../Components/UI/Header'
import expData from './Components/expData'
import ExpCard from './Components/ExpCard'
const Experiences = () => {
	return (
		<>
			<Header title1="Exp" title2="eriences" description="" />
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{expData.map((exp) => (
					<ExpCard
						name={exp.name}
						desc={exp.desc}
						date={exp.date}
						skills={exp.skills}
						certificate={exp.certificate}
					/>
				))}
			</div>
		</>
	)
}

export default Experiences
