import photo from '../../Assets/Images/PersonalPhoto.png'

const Homepage = () => {
	return (
		<div className="flex items-center text-forth">
			<section className="ml-5">
				<h1 className="font-larkenBlack text-5xl ">
					<span className="text-fifth">Owen</span> Tobias Sinurat
				</h1>
				<p className="font-kollektif">
					a 20-year-old Informatics undergraduate from{' '}
					<span className="text-fifth">Bandung Institute of Technology </span>
					with a dynamic blend of passions in technology, sports, and finance.
				</p>
			</section>
			<img src={photo} alt="" className="w-50 overflow-x-hidden" />
		</div>
	)
}

export default Homepage
