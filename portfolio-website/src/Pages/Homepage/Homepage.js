import photo from '../../Assets/Images/PersonalPhoto.jpg'
import blackMarble from '../../Assets/Images/blackMarble.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
const Homepage = () => {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<div data-aos='fade-left' className="lg:pt-20 mx-5 lg:mx-32 flex items-center justify-between text-forth h-screen">
				<section className="w-96 md:w-96">
					<h1 className="mt-44 font-larkenBlack text-6xl md:mt-0">
						<span className="text-fifth">OWEN</span> TOBIAS SINURAT
					</h1>
					<p className="font-kollektif text-xl">
						a 20-year-old Informatics undergraduate from
						<span className="text-fifth">Bandung Institute of Technology </span>
						with a dynamic blend of passions in technology, sports, and finance.
					</p>
				</section>
				<img
					src={photo}
					alt=""
					className="w-80 lg:w-96 rounded-xl hidden bg-third shadow-lg border-white md:block shadow-fifth"
				/>
		</div>
	)
}

export default Homepage
