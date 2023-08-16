import github from '../../../Assets/Icons/github.svg'
import link from '../../../Assets/Icons/link.png'

const ProjectsCard = (props) => {
	return (
		<div className="text-forth rounded-xl border flex p-5 w-80">
			<section className="">
				<section className='flex justify-between'>
					<h3 className="font-kollektifBoldItalic">{props.title}</h3>
					<img src={props.category} alt="" className='h-5 mx-2'/>
				</section>
				<p className="font-kollektif">{props.date}</p>
				<p className="font-kollektif">{props.desc}</p>
			</section>
			<section className="border-l self-center">
				<img src={github} alt="github" className="h-10 m-2" />
				<img src={link} alt="website" className="h-9 m-2" />
			</section>
		</div>
	)
}

export default ProjectsCard
