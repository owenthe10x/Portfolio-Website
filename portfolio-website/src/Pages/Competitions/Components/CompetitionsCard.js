import certificate from '../../../Assets/Icons/certificate.png'

const CompetitionsCard = (props) => {
	return (
		<div className="text-forth rounded-xl border p-5 w-80font-kollektif">
			<section>
				<section className="flex justify-between items-end">
					<section className="flex gap-2">
						<img src={props.category} alt="" className="h-5" />
						<h3 className="font-kollektifBoldItalic">{props.name}</h3>
					</section>
					<h2 className="font-kollektifBold text-2xl text-fifth">
						{props.rank}
					</h2>
				</section>
				<section className="flex justify-between">
					<p className="text-slate-400">Hosted by {props.host}</p>
					<p className="font-kollektifItalic">{props.date}</p>
				</section>
				<p className="my-5">{props.desc}</p>
			</section>
			<section className="border-t self-center flex justify-between pt-2">
				<p>{props.scale}</p>
				<a href={props.certificate}>
					<img src={certificate} alt="certificate" className="h-8" />
				</a>
			</section>
		</div>
	)
}

export default CompetitionsCard
