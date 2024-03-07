import { Component } from "react"

import TabItem from "../TabItem"
import DescItem from "../DescItem"

import "./index.css"

const tabsList = [
    { tabId: 'EXPERIENCE', displayText: 'Experience' },
    { tabId: 'EDUCATION', displayText: 'Education' },
]

const detailsList =[
    {
        id: 0,
        title:"Web Development",
        description: 'Fresher',
        category: 'EXPERIENCE',
    },
    {
        id: 1,
        title:"2019-2023",
        description: 'B.TECH from NIT Puducherry',
        category: 'EDUCATION',
    },
]


class About extends Component {
    state = {
        activeId: tabsList[0].tabId,
    }

    clickTabItem = tabId => {
        this.setState({ activeId:tabId})
    }

    getFilteredDescription = detailsList =>{
        const {activeId} = this.state
        const filteredDescription = detailsList.filter(
            eachDesc => eachDesc.category === activeId
        )

        return filteredDescription
    }
    
    render(){
        const{activeId} = this.state
        const descriptionList = this.getFilteredDescription(detailsList)

        return (
            <div id='about'>
                <div className='app-cont'>
                    <div className='row'>
                        <div className='about-col-1'>
                            <img className='pro-pic' src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1708423241/Untitled_1_njaiqg.png' alt='' />
                        </div>
                        <div className='about-col-2'>
                            <h1 className='sub-title'>ABOUT ME</h1>
                            <p className='desc'>Wiiling to pursue my career in an
                                organization with a
                                performance oriented environment
                                and   utilize my skills towards
                                the growth of the company.
                                Being ambitious   and   hardworking.
                                Looking forward to
                                work in challenging and
                                responsible roles.
                            </p>
                            <div className='tabs'>
                                {tabsList.map(eachTab=>(
                                    <TabItem 
                                    key={eachTab.tabId}
                                    tabDetails={eachTab}
                                    clickTabItem = {this.clickTabItem}
                                    isActive ={activeId===eachTab.tabId}
                                    />
                                ))}
                            </div>   
                            <div className="desc-list">
                                <ul>
                                    {descriptionList.map(eachDesc=>(
                                        <DescItem key={eachDesc.id} descDetails={eachDesc}/>
                                    ))}
                                </ul>
                            </div> 
                            {/* <div className="btn-cont"> */}
                            <button className='resume-btn'>
                                <a href="https://drive.google.com/file/d/1uFhIISpbwXCjiJDrHUPUOCdIegivWAzw/view?usp=drive_link" target="_blank" rel="noreferrer">
                                    RESUME
                                </a>   
                                    
                            </button>
                            {/* </div> */}
                           
                            


                        </div>

                    </div>

                </div>
            </div>

        )

    }

}

export default About