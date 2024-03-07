import { Link } from "react-scroll"
import "./index.css"

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className='logo-cont'>
                <img src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1708005315/wesite_logo_gjyrp8.png' className='logo' alt='website logo' />
            </div>
            <ul className='nav-links'>
                <Link spy={true} smooth={true} offset={-100} duration={500}  className='nav-item' to='intro' >HOME</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className='nav-item' to='about'>ABOUT</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className='nav-item' to='skills'>SKLLS</Link>
                <Link spy={true} smooth={true} offset={-100} duration={500} className='nav-item' to='projects'>PROJECTS</Link>
                <Link  spy={true} smooth={true} offset={-10} duration={500} className='contact-btn' to='contact'>CONTACT</Link>
            </ul>
        </nav>

    )
}

export default Navbar