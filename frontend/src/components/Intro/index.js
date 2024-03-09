// eslint-disable-next-line
// import Popup from 'reactjs-popup'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoMdClose } from 'react-icons/io'
import { Link } from "react-scroll"

import "./index.css"

// eslint-disable-next-line
const Intro= ()=> {
    
        return ( 

        <div id='intro'>
            <div className='app-cont'>
                <div className='intro-cont'>
                    <p className='intro-span'>I' m a </p>
                    <h1 className='job'>FULL STACK <br />SOFTWARE<br />DEVELOPER</h1>
                    <Link spy={true} smooth={true} offset={-100} duration={500}  to='projects'>
                        <button className='intro-btn'>View Projects</button>
                    </Link>
                    
                </div>
                    
            </div>
        </div>

       
           
        )
    

}


export default Intro