import github from '../../../Assets/Icons/github.svg'
import link from '../../../Assets/Icons/link.png'

const ProjectsCard = (props) => {
	return (
		<div className="text-forth rounded-xl border  p-5 w-80 h-fit">
			<section className="flex">
				<section className="border-r pr-4">
					<section className="flex justify-between">
						<h3 className="font-kollektifBoldItalic">{props.title}</h3>
						<img src={props.category} alt="" className="h-5 mx-2" />
					</section>
					<p className="font-kollektifItalic">{props.date}</p>
					<p className="font-kollektif">{props.desc}</p>
					<section className="border-t border-forth self-center flex gap-2 mt-2 pt-2">
						{props.tech.map((tech) => (
							<img src={tech} className="aspect-square w-5 lg:w-8"></img>
						))}
					</section>
				</section>
				<section className="self-center min-w-fit ">
					{props.link != '' ? (
						<a href={props.link} target='_blank'>
							<img src={link} alt="github" className="h-10 m-2 mr-0" />
						</a>
					) : (
						<></>
					)}
					{props.repository != '' ? (
						<a href={props.repository} target='_blank'>
							<img src={github} alt="website" className="h-9 m-2 mr-0" />
						</a>
					) : (
						<></>
					)}
				</section>
			</section>
		</div>
	)
}

export default ProjectsCard
