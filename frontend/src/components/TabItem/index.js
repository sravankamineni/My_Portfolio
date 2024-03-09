import './index.css'

const TabItem = props => {
    const { tabDetails, clickTabItem, isActive } = props
    const { tabId, displayText } = tabDetails
    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    const activeTabBtnClassName = isActive ? 'active-tab' : ''

    return (
        <p className={`tab-link ${activeTabBtnClassName}`} onClick={onClickTabItem}>
            {displayText}
        </p>
    )
}

export default TabItem
