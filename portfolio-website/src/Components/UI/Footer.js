import gmail from '../../Assets/Icons/gmail.svg'
import linkedin from '../../Assets/Icons/linkedin.svg'
import whatsapp from '../../Assets/Icons/whatsapp.svg'
import discord from '../../Assets/Icons/discord.svg'
import github from '../../Assets/Icons/github.svg'
const Footer = () => {
	return (
		<footer className="flex flex-wrap gap-5 justify-center py-10">
			<a href="mailto:owentobias21@gmail.com" target="blank" className="w-8">
				<img src={gmail} alt="gmail" />
			</a>
			<a
				href="https://discord.com/users/420187438820884480"
				target="blank"
				className="w-8"
			>
				<img src={discord} alt="discord" />
			</a>
			<a
				href="https://www.linkedin.com/in/owen-tobias-sinurat-99b6b1203/"
				target="blank"
				className="w-8"
			>
				<img src={linkedin} alt="linkedin" />
			</a>
			<a href="https://github.com/owenthe10x" target="blank" className="w-8">
				<img src={github} alt="github" />
			</a>
			<a href="https://wa.me/+6282251861573" target="blank" className="w-8">
				<img src={whatsapp} alt="whatsapp" />
			</a>
		</footer>
	)
}

export default Footer
