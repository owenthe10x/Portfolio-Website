import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import home from '../../Assets/Icons/home.png'
import about from '../../Assets/Icons/about.png'
import competitions from '../../Assets/Icons/competitions.png'
import skills from '../../Assets/Icons/skills.png'
import projects from '../../Assets/Icons/projects.png'
import experiences from '../../Assets/Icons/experiences.png'
import sword from '../../Assets/Icons/sword.png'
const Navbar = () => {
	const [menu, setMenu] = useState(false)
	const openMenu = () => {
		setMenu(true)
	}
	const closeMenu = () => {
		setMenu(false)
	}
	return (
		<>
			<button
				className="fixed top-1/2 -right-[20px] -translate-y-1/2 p-3 rounded-full bg-forth w-fit rotate-[270deg]"
				onClick={openMenu}
			>
				<img src={sword} alt="" className="w-8 rotate-[315deg]" />
			</button>
			{menu && (
				<nav className="transition-transform duration-300 ease-in-out transform bg-second rounded-l-xl fixed top-1/2 right-0 p-10 -translate-y-1/2 ">
					<button
						className="fixed -left-[25px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-forth w-fit rotate-[90deg]"
						onClick={closeMenu}
					>
						<img src={sword} alt="" className="w-8 rotate-[315deg]" />
					</button>
					<ul className="text-white justify-self-center">
						<NavLink to="/" className="p-2 flex items-center text-xl" end>
							<img src={home} alt="" className="h-7 mr-4" />
							Home
						</NavLink>
						<NavLink to="/about" className="p-2 flex items-center text-xl " end>
							<img src={about} alt="" className="h-7 mr-4" />
							About
						</NavLink>
						<NavLink to="/skills" className="p-2 flex items-center text-xl " end>
							<img src={skills} alt="" className="h-7 mr-4" />
							Skills
						</NavLink>
						<NavLink to="/experiences" className="p-2 flex items-center text-xl " end>
							<img src={experiences} alt="" className="h-7 mr-4" />
							Experiences
						</NavLink>
						<NavLink to="/projects" className="p-2 flex items-center text-xl " end>
							<img src={projects} alt="" className="h-7 mr-4" />
							Projects
						</NavLink>
						<NavLink to="/competitions" className="p-2 flex items-center text-xl " end>
							<img src={competitions} alt="" className="h-7 mr-4" />
							Competitions
						</NavLink>
					</ul>
				</nav>
			)}
		</>
	)
}

export default Navbar
