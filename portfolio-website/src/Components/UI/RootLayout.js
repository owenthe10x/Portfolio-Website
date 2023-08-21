// Routing
import {Outlet} from 'react-router-dom'
import {ScrollRestoration} from 'react-router-dom'
// Components
import Navbar from './NavBar'
import Footer from './Footer'

// Image
const RootLayout = () => {
	return (
		<div className=" min-h-screen min-w-screen bg-first">
			<ScrollRestoration />
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default RootLayout
