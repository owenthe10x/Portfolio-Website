const SkillsCard = (props) => {
	return (
		<section className="text-forth rounded-xl border p-5 w-80 h-fit">
			<section className="flex justify-between items-center">
				<h3 className="font-kollektifBoldItalic">{props.name}</h3>
				<img src={props.illustration} alt="" className="h-5 mx-2 lg:h-10" />
			</section>
			<p className="font-kollektif">{props.desc}</p>
			<section className="border-l self-center"></section>
			<p className="text-fifth flex justify-end font-bold">{props.expertise}</p>
		</section>
	)
}

export default SkillsCard
