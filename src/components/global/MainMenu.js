import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../context/auth";
class MainMenu extends Component {
  static contextType = AuthContext;
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push(name)
  }

  render() {
    const { activeItem } = this.state
    const { isAutheticated, login, logout } =  this.context;
    return (
      <Menu size='small'>
        <Menu.Item name='/' content="Home" active={activeItem === '/'} onClick={this.handleItemClick} />
        <Menu.Item name='/dashboard' content="Dashboard" active={activeItem === '/dashboard'} onClick={this.handleItemClick} />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button color='google plus' onClick={!isAutheticated() ? (()=>login()) :  (()=>logout(this.props.history))}>
              <Icon name='google' /> {isAutheticated() ? "Logout" :  "Login"}
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(MainMenu)