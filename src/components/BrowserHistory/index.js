import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {searchInput: '', historyList: initialHistoryList}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickOnDelete = id => {
    const {historyList} = this.state

    const updatedHistoryList = historyList.filter(eachApp => eachApp.id !== id)
    this.setState({historyList: updatedHistoryList})
  }

  getSearchResults = () => {
    const {searchInput, historyList} = this.state

    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  renderHistoryApps = () => {
    const searchResults = this.getSearchResults()
    return (
      <ul className="history-list-container">
        {searchResults.map(eachHistory => (
          <HistoryItem
            historyList={eachHistory}
            key={eachHistory.id}
            clickOnDelete={this.clickOnDelete}
          />
        ))}
      </ul>
    )
  }

  renderNoHistory = () => (
    <div className="no-history-container">
      <p className="no-history-text">There is no history to show</p>
    </div>
  )

  render() {
    const searchResults = this.getSearchResults()
    return (
      <div className="main-container">
        <div className="header-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search History"
              className="search-input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="bottom-section">
          {searchResults.length > 0
            ? this.renderHistoryApps()
            : this.renderNoHistory()}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
