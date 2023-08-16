// Routing
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './Components/UI/RootLayout'

// Pages
import Homepage from './Pages/Homepage/Homepage'
import About from './Pages/About/About'
import Experiences from './Pages/Experiences/Experiences'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import Competitions from './Pages/Competitions/Competitions'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{index: true, element: <Homepage />},
			{path: '/about', element: <About />},
			{path: '/experiences', element: <Experiences />},
			{path: '/projects', element: <Projects />},
			{path: '/skills', element: <Skills />},
			{path: '/competitions', element: <Competitions />},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}
export default App
