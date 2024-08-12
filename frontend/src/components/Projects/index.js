import { Component} from "react"

import { BsArrowUpRightCircle } from "react-icons/bs";


import "./index.css"



class Projects extends Component {

    state = {
        isMoused: false,
        isLgMoused:false
    }
    setBackground = () => {
        this.setState(prevState => ({ isMoused: !prevState.isMoused }))
    }

    setNot = () => {
        this.setState(prevState => ({ isMoused: !prevState.isMoused }))
    }

    render(){
        const { isMoused} = this.state
        const bgColorClassName = isMoused ? "add-bg" : "" 
        return(
            <div id="projects">
                <div className='app-cont projects-cont'>
                    <h1 className='project-head'>PROJECTS</h1>
                    <ul className='projects-list'>
                        <a href="https://sravnnxtwatch.ccbp.tech/" target="_blank" rel="noreferrer">
                            <li onMouseOut={this.setNot} onMouseOver={this.setBackground} className='project-card'>
                                <div loading="lazy" className='image-cont'>
                                    <img className='project-img' src="https://res.cloudinary.com/dnmcjyigq/image/upload/v1708168249/smartmockups_lspz5xhd_ptsc8k.jpg" alt="" />
                                </div>
                                <div className='project-info'>
                                    <h1 className='project-title'>NXT Watch</h1>
                                    <div className='buttons-cont'>
                                        <button className="button">Entertainment</button>
                                        <button className="button">Web Developmet</button>
                                    </div>
                                    <BsArrowUpRightCircle size={40} className={`arrow ${bgColorClassName}`} />
                                </div>
                            </li>
                        </a>
                        <a href="https://sravanrpsgame.ccbp.tech/" target="_blank" rel="noreferrer">
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
                        </a>
                      
                        <a href="https://sravankjobbyapp.ccbp.tech/" target="_blank" rel="noreferrer">
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

                      </a>
                    
                    </ul>
                </div>

            </div>
           
        )
    }


}

export default Projects