import certificate from '../../../Assets/Icons/certificate.png'

const ExpCard = (props) => {
	return (
		<div className="text-forth rounded-xl border p-5 w-80 font-kollektif">
			<section>
				<h3 className="font-kollektifBoldItalic text-xl">{props.name}</h3>
				<p className="font-kollektifItalic">{props.date}</p>
				<p className="my-5">{props.desc}</p>
			</section>
			<section className="border-t self-center flex justify-between pt-2">
				<p className='text-fifth'>{props.skills}</p>
				<a href={props.certificate}>
					<img src={certificate} alt="certificate" className="h-8" />
				</a>
			</section>
		</div>
	)
}

export default ExpCard
