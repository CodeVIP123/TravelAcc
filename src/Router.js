import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import ShopItem from './components/Shop_Item'

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar /><Home /></>
    },
    {
        path: "/about",
        element: <><Navbar /><About /></>
    },
    {
        path: "/shop",
        element: <><Navbar /><Shop /></>
    },
    {
        path: "/shop/:item",
        element: <><Navbar /><ShopItem /></>
    }
])

export { router }


