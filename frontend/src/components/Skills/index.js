import "./index.css"

const Skills = () =>{
    return(
        <div id='skills'>
            <div className='skill-cont app-cont'>
                <h1 className='skill-head'>Skills</h1>
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
        </div>

    )
}

export default Skills