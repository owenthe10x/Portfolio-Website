// Routing
import {Outlet} from 'react-router-dom'

// Components
import Navbar from './NavBar'
import Footer from './Footer'

const RootLayout = () => {
	return (
		<div className='bg-first min-h-screen min-w-screen'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}

export default RootLayout
