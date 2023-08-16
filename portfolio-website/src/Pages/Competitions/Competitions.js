import Header from '../../Components/UI/Header'
import competitionData from './Components/competitionData'
import CompetitionsCard from './Components/CompetitionsCard'
const Competition = () => {
	return (
		<>
			<Header title1="Compe" title2="titions" description="" />
			<div className="flex flex-wrap gap-5 mx-5 justify-center">
				{competitionData.map((comp) => (
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
				))}
			</div>
		</>
	)
}

export default Competition
