import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import {renderAlert, regexValid} from '../../utils/auxiliary';
import {renderFormFieldErr} from '../../utils/form';

class Signup extends Component {


  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  render() {

    const {handleSubmit} = this.props;

    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field name="email" type="text" label="Email"
                 component={renderFormFieldErr}/>
          <Field name="password" type="password" label="Password"
                 component={renderFormFieldErr}/>
          <Field name="passwordConfirm" type="password" label="Confirm Password"
                 component={renderFormFieldErr}/>
          <button className="btn btn-success">Sign up!</button>
          {renderAlert(this.props.errorUpMessage)}
        </form>
    );
  }
}

function validate(formProps) {
  const errors = {};

  //email address must contain "@" letters and "."
  const regexemail = new RegExp('^(?:.*[a-z])(?:.*\x40)(?:.*[.])');
  //password must contain at least 8 digits, 2 capital letters & 2 numbers
  const regexpassword = new RegExp('^(?=.{8,})(?=.*[A-Z]{2})(?=.*[0-9]{2})');

  if (!regexValid(formProps.email, regexemail)) {
    errors.email = 'please enter a correct email';
  }
  if (!regexValid(formProps.password, regexpassword)) {
    errors.password = 'please enter a correct password ' +
        '- password must contain at least 8 digits, 2 capital letters & 2 numbers ';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'please confirm  password';
  }

  if (formProps.passwordConfirm !== formProps.password) {
    errors.passwordConfirm = 'passwords must match';
  }
  return errors;
}

function mapStateToProps(state) {
  return {errorUpMessage: state.auth.errorup};
}

export default reduxForm({
  form: 'signup',
  validate,
})(connect(mapStateToProps, actions)(Signup));