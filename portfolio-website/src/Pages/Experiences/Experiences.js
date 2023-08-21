import Header from '../../Components/UI/Header'
import expData from './Components/expData'
import ExpCard from './Components/ExpCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Experiences = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div data-aos="fade-up">
			<Header
				title1="Exp"
				title2="eriences"
				description="This is a broad view of my experiences, covering both programming and non-programming areas, while also spanning professional and non-professional contexts."
			/>
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{expData.map((exp) => (
					<ExpCard
						name={exp.name}
						desc={exp.desc}
						date={exp.date}
						skills={exp.skills}
						certificate={exp.certificate}
						institution={exp.institution}
					/>
				))}
			</div>
		</div>
	)
}

export default Experiences
