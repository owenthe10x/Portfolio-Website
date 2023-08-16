import image from '../../Assets/Images/flower1 (1).jpg'
const Header = (props) => {
	return (
		<header className="text-forth h-fit p-20 pt-40 mb-5 bg-center text-center">
			<h1 className="font-larkenBoldIta text-3xl">
				<span className="text-fifth">{props.title1}</span>
				{props.title2}
			</h1>
			<p className="font-kollektif">{props.description}</p>
		</header>
	)
}

export default Header
