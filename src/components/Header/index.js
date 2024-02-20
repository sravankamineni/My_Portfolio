import { Component } from 'react'

// eslint-disable-next-line





// import Popup from 'reactjs-popup'

import { BsArrowUpRightCircle } from "react-icons/bs";
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoMdClose } from 'react-icons/io'



import "./index.css"

// eslint-disable-next-line


class Header extends Component {
    
    state = {
        isMoused:false,
    }
    setBackground = () => {
        this.setState(prevState=>({isMoused:!prevState.isMoused}))
    }

    setNot = () => {
        this.setState(prevState => ({ isMoused: !prevState.isMoused }))
    }
    render() {
        const{isMoused} = this.state
        const bgColorClassName = isMoused ? "add-bg" : "" 
        return ( 
            <div id='header'>
                <div className='app-cont'>
                    <nav>
                        <div className='logo-cont'>
                            <img src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1708005315/wesite_logo_gjyrp8.png' className='logo' alt='website logo' />
                            <h1 className='logo-text'>RAVAN KAMINENI</h1>
                        </div>

                        <ul>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/'>ABOUT</a></li>
                            <li><a href='/'>PROJECTS</a></li>
                            <li><a href='/'>EXPERIENCE</a></li>
                            <li><a href='/'>CONTACT</a></li>
                        </ul>
                    </nav>
                    <div className='intro-cont'>
                        <p className='intro-span'>I' m a </p>
                        <h1 className='job'>FULL STACK <br />SOFTWARE<br />DEVELOPER</h1>
                        <button className='intro-btn'>View Projects</button>
                    </div>
                

                <div id='about'>
                    <div>
                            <img className='pro-pic' src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1708423241/Untitled_1_njaiqg.png' alt='' />
                    </div>


                </div>
                        
                   
                    


















                    <div className='skill-cont'>
                        <h1 className='skill-head'>EXPERIENCE</h1>
                        <ul className="skill-list">
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png" alt="HTML" />
                                <p className='skill-name'>HTML</p>
                            </li>
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/css-logo-img.png" alt="CSS" />
                                <p className='skill-name'>CSS</p>
                            </li>
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/node.js-logo-img.png" alt="HTML" />
                                <p className='skill-name'>Node.JS</p>
                            </li>
                           
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/react-logo-img.png" alt="HTML" />
                                <p className='skill-name'>React.JS</p>
                            </li>
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/python-logo-img.png" alt="HTML" />
                                <p className='skill-name'>Python</p>
                            </li>
                            <li className="skill-item">
                                <img className="skill-logo" src="https://assets.ccbp.in/frontend/react-js/tech-era/javascript-logo-img.png" alt="JAVASCRIPT" />
                                <p className='skill-name'>Javascript</p>
                            </li>
                          

                        </ul>

                    </div>




















                    <div className='projects-cont'>
                        <h1 className='project-head'>PROJECTS</h1>

                        <ul className='projects-list'>



                            <li onMouseOut={this.setNot} onMouseOver={this.setBackground} className='project-card'>
                                <div loading="lazy" className='image-cont'>
                                    <img className='project-img' src="https://res.cloudinary.com/dnmcjyigq/image/upload/v1708168249/smartmockups_lspz5xhd_ptsc8k.jpg" alt="" />
                                </div>
                                <div className='project-info'>
                                    <h1 className='project-title'>NXT Watch</h1>
                                    <div className='buttons-cont'>
                                        <button className='button'>Entertainment</button>
                                        <button className='button'>Web Developmet</button>
                                    </div>
                                    <BsArrowUpRightCircle size={40} className={`arrow ${bgColorClassName}`} />
                                </div>
                            </li>


                            <li className='project-card'>
                                <div className='image-cont'>
                                    <img className='project-img' src="https://res.cloudinary.com/dnmcjyigq/image/upload/c_scale,h_3166,w_4749/v1708186746/smartmockups_lsq9wv8n_yzei03.jpg" alt="" />
                                </div>
                                <div className='project-info'>
                                    <h1 className='project-title'>Rock Paper Scissors</h1>
                                    <div className='buttons-cont'>
                                        <button className='button'>Gaming</button>
                                        <button className='button'>Web Developmet</button>
                                    </div>


                                </div>



                            </li>







                            <li className='project-card'>
                                <div className='image-cont'>
                                    <img className='project-img' src="https://res.cloudinary.com/dnmcjyigq/image/upload/c_scale,h_3166,w_4749/v1708189219/smartmockups_lsqbqk3j_ms1dhn.jpg" alt="" />
                                </div>
                                <div className='project-info'>
                                    <h1 className='project-title'>Jobbby App</h1>
                                    <div className='buttons-cont'>
                                        <button className="button">Social</button>
                                        <button className='button'>Web Development</button>
                                    </div>

                                </div>

                            </li>

                        </ul>



                    </div>




















                </div>
            </div>
           
           
        )
    }

}


export default Header