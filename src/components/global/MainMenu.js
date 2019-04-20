import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../context/auth";
import * as menuActions from "../../actions/menu";
import { bindActionCreators } from 'redux';

class MainMenu extends Component {
  static contextType = AuthContext;


  handleItemClick = (e, { name }) => {
    this.props.focus(name);
    this.props.history.push(name)
  }
  componentDidMount(){
    const {pathname} = this.props.location
    this.props.focus(pathname);
  }
  render() {

    const { isAutheticated, login, logout } =  this.context;
    return (
      
      <Menu size='small'>
        <Menu.Item name='/' content="Home" active={this.props.selectedOption === '/'} onClick={this.handleItemClick} />
        <Menu.Item name='/dashboard' content="Dashboard" active={this.props.selectedOption === '/dashboard'} onClick={this.handleItemClick} />

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

const mapStateToProps = state => ({
  selectedOption: state.menu.selectedOption
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
      ...menuActions,
  }, dispatch);

const connectComponent = connect(mapStateToProps,mapDispatchToProps)(MainMenu);

export default withRouter(connectComponent);