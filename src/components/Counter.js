import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';
import { bindActionCreators } from 'redux';

class Counter extends Component {

  render() {
    return (
      <div>
        <p>Counter Redux -> {this.props.count}</p>
        <button onClick={this.props.increment} disabled={this.props.isLoading}>Increment</button>
        <button onClick={this.props.incrementAsync}>Increment Async</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isLoading: state.counter.isLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
      ...counterActions,
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Counter);