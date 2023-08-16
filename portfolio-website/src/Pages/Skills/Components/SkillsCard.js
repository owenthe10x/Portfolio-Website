const SkillsCard = (props) => {
	return (
		<section className="text-forth rounded-xl border p-5 w-80">
			<section className="flex justify-between">
				<h3 className="font-kollektifBoldItalic">{props.name}</h3>
				<img src={props.illustration} alt="" className="h-5 mx-2"/>
			</section>
			<p className="font-kollektif">{props.desc}</p>
			<section className="border-l self-center"></section>
		</section>
	)
}

export default SkillsCard