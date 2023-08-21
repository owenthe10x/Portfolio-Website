import image from '../../Assets/Images/flower1 (1).jpg'
const Header = (props) => {
	return (
		<header className="text-forth h-fit pt-20 sm:pt-24 md:pt-32 lg:pt-36 mb-5 bg-center text-center">
			<h1 className="font-larkenBoldIta text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
				<span className="text-fifth shadow-fifth">{props.title1}</span>
				{props.title2}
			</h1>
			<p className="font-kollektif text-center mx-auto m-5 sm:text-lg md:text-xl lg:text-2xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] w-fit">{props.description}</p>
		</header>
	)
}

export default Header
