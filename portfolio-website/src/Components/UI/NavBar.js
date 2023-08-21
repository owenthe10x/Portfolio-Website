import {NavLink} from 'react-router-dom'
import {useState} from 'react'

import menuIcon from '../../Assets/Icons/menu.svg'
import closeIcon from '../../Assets/Icons/close.svg'

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
				className="fixed top-5 right-5 p-3 rounded-full bg-forth w-fit lg:hidden"
				onClick={openMenu}
			>
				<img src={menuIcon} alt="" className="w-5" />
			</button>
			<ul className="hidden fixed top-10 lg:flex justify-center gap-x-20 gap-y-6 left-1/2 -translate-x-1/2 ">
				<NavLink
					to="/"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					home.
				</NavLink>
				<NavLink
					to="/about"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					about.
				</NavLink>
				<NavLink
					to="/skills"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					skills.
				</NavLink>
				<NavLink
					to="/experiences"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					experiences.
				</NavLink>
				<NavLink
					to="/projects"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					projects.
				</NavLink>
				<NavLink
					to="/competitions"
					className={({isActive}) =>
						isActive
							? 'py-1 px-3 text-xl bg-fifth rounded-xl shadow-fifth shadow-md'
							: 'py-1 px-3 text-xl bg-forth rounded-xl shadow-white shadow-md'
					}
					onClick={closeMenu}
					end
				>
					competitions.
				</NavLink>
			</ul>
			{menu && (
				<nav
					onClick={closeMenu}
					className="bg-black bg-opacity-80 w-screen min-h-screen transition-transform duration-300 ease-in-out transform rounded-l-xl fixed top-1/2 right-0 p-10 -translate-y-1/2 "
				>
					<button
						className="fixed right-5 top-5 p-3 rounded-full bg-forth w-fit"
						onClick={closeMenu}
					>
						<img src={closeIcon} alt="" className="w-5" />
					</button>
					<ul className="flex flex-wrap justify-center gap-x-20 gap-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<NavLink
							to="/"
							className="py-1 px-3 text-xl bg-forth rounded-xl "
							onClick={closeMenu}
							end
						>
							home.
						</NavLink>
						<NavLink
							to="/about"
							className="py-1 px-3 text-xl bg-forth rounded-xl  "
							onClick={closeMenu}
							end
						>
							about.
						</NavLink>
						<NavLink
							to="/skills"
							className="py-1 px-3 text-xl bg-forth rounded-xl  "
							onClick={closeMenu}
							end
						>
							skills.
						</NavLink>
						<NavLink
							to="/experiences"
							className="py-1 px-3 text-xl bg-forth rounded-xl  "
							onClick={closeMenu}
							end
						>
							experiences.
						</NavLink>
						<NavLink
							to="/projects"
							className="py-1 px-3 text-xl bg-forth rounded-xl  "
							onClick={closeMenu}
							end
						>
							projects.
						</NavLink>
						<NavLink
							to="/competitions"
							className="py-1 px-3 text-xl bg-forth rounded-xl  "
							onClick={closeMenu}
							end
						>
							competitions.
						</NavLink>
					</ul>
				</nav>
			)}
		</>
	)
}

export default Navbar
