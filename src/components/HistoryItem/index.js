import './index.css'

const HistoryItem = props => {
  const {historyList, clickOnDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onClickDelete = () => {
    clickOnDelete(id)
  }

  return (
    <li className="list-item-container">
      <p className="time-text">{timeAccessed}</p>
      <div className="history-details">
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <div className="domain-details">
          <p className="domain-title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
