import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './DateBanner.css'

export default class DateBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        date : new Date().toLocaleString()
      })
    },1000)
  }


  render() {

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          onClick={this.handleItemClick}
        >
          Current Date/Time
        </Menu.Item>
        <Menu.Item>{this.state.date}</Menu.Item>
      </Menu>
    )
  }
}
