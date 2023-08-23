import certificate from '../../../Assets/Icons/certificate.png'

const ExpCard = (props) => {
	return (
		<div className="text-forth rounded-xl border p-5 w-80 font-kollektif h-fit">
			<section>
				<h3 className="font-kollektifBoldItalic text-xl">{props.name}</h3>
				<section className="flex justify-between">
					<p className="font-kollektifItalic">{props.date}</p>
					<p className="font-kollektif">{props.institution}</p>
				</section>
				<p className="my-5">{props.desc}</p>
			</section>
			<section className="border-t self-center flex justify-between pt-2">
				<p className="text-fifth">{props.skills}</p>
				{props.certificate != '' ? (
					<a
						href={props.certificate}
						className="aspect-square h-8 w-auto"
						target="_blank"
					>
						<img
							src={certificate}
							alt="certificate"
							className="w-full h-full"
						/>
					</a>
				) : (
					<></>
				)}
			</section>
		</div>
	)
}

export default ExpCard
