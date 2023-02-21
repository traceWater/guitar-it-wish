import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import history from '../../utils/history';

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  goHome() {
    setTimeout(() => {
      history.push('/')
    }, 1500);
  }

  render() {
    return (
        <div>
          <h1>See you next time...</h1>
          {this.goHome()}
        </div>);
  }
}

export default connect(null, actions)(Signout);