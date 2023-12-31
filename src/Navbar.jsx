import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { NavLinks } from './NavLinks'

export const Navbar = () => {

    const { openSidebar, setPageId } = useGlobalContext()

    const handleSubmenu = (e) => {
        // console.log(e.target)
        if (!e.target.classList.contains('nav-link')) {
            setPageId(null)
        }
    }

    return (<>
        <nav
            onMouseOver={handleSubmenu}>
            <div
                className='nav-center'>
                <h3
                    className='logo'>
                    strapi
                </h3>
                <button
                    className='toggle-btn'
                    onClick={openSidebar}>
                    <FaBars />
                </button>
                {/* nav links here */}
                <NavLinks />
            </div>
            <button
                className='btn subscribe-btn'>
                Subscribe
            </button>
        </nav>
    </>)
}