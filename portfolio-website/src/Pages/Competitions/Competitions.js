import Header from '../../Components/UI/Header'
import competitionData from './Components/competitionData'
import CompetitionsCard from './Components/CompetitionsCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Competition = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div data-aos="fade-up">
			{/*I've secured victories both as an individual and within a team of friends in various competitive arenas. These successes stand as a testament to my ability to excel both independently and collaboratively.*/}
			<Header
				title1="Compe"
				title2="titions"
				description="
"
			/>
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				<p className="text-forth my-20 font-kollektifBold">Winning Soon!</p>
				{/*{competitionData.map((comp) => (
					<CompetitionsCard
						name={comp.name}
						rank={comp.rank}
						desc={comp.desc}
						scale={comp.scale}
						host={comp.host}
						date={comp.date}
						category={comp.category}
						certificate={comp.certificate}
					/>
				))}*/}
			</div>
		</div>
	)
}

export default Competition
