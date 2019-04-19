import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class MainMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push(name)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small'>
        <Menu.Item name='/' content="Home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button color='google plus'>
              <Icon name='google' /> Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(MainMenu)