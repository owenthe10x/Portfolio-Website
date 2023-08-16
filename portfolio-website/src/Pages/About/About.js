import Header from '../../Components/UI/Header'
import HobbyCard from './Components/HobbyCard'
import futsal from '../../Assets/Images/futsal.jpg'
import makrab from '../../Assets/Images/makrab.jpg'
import jalan from '../../Assets/Images/jalan.jpg'
import masak from '../../Assets/Images/masak.jpg'

const About = () => {
	return (
		<>
			<Header title1="Ab" title2="out" description="Details about me." />
			<p className="text-forth text-justify">
				Owen Tobias Sinurat, Owen for short, an ambitious man born in 2003, and
				is now studying Informatics Engineering at
				<span className="text-fifth"> Bandung Institute of Technology.</span>
			</p>
			<h2 className="text-center text-forth  font-guminert font-bold">
				I have a few hobbies
			</h2>
			<section className="">
				<HobbyCard
					name="Suiiiiiiiiiii"
					desc="I've fallen in love with football. My dream was to become a soccer player, but now, there's nothing wrong with being a programmer who is good at playing soccer hahaha. That was when i compete against other faculty in ITB at the TPB Cup event."
					image={futsal}
				/>
				<HobbyCard
					name="Si paling EO"
					desc="When attending an event, some people instinctively will analyze and judge the event because they're bored. I am one of them, so I also became interested in organizing an event that will fulfill the audience expectation. The photo was when i became the EO of STEI-K Jatinangor's Bonding Night"
					image={makrab}
					customImgStyles="order-last "
				/>
				<HobbyCard
					name="GAS HEALING!"
					desc="I'm the type of person who prefers traveling and hanging out with friends rather than spending hours scrolling on tiktok. The photo was when my friends and I played paintball at Situ Ciluenca after a quite tough midterm exam."
					image={jalan}
				/>
				<HobbyCard
					name="Let him cook!"
					desc="I am always amazed by the work produced by a chef, because when it comes to cooking food, taste isn't the only thing that is considered. Visuals, texture, smell, nutrition, and even the weather should be considered when making someone a meal. This was one of my masterpieces with a limited budget :D"
					image={masak}
					customImgStyles="order-last "
				/>
			</section>
		</>
	)
}

export default About
