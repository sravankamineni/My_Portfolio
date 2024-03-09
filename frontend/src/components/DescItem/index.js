import './index.css'

const DescItem = props => {
    const { descDetails } = props
    const { description,title } = descDetails
    return (
        <li className="desc-item">
          <span className='span'>{title}</span><br/>{description}
        </li>
    )
}

export default DescItem