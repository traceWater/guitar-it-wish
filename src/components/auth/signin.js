// import React, {Component} from 'react';
// import {Field, reduxForm} from 'redux-form';
// import * as actions from '../../actions';
// import {connect} from 'react-redux';

// import {renderAlert} from '../../utils/auxiliary';
// import {renderFormField} from '../../utils/form';

// class Signin extends Component {

//   handleFormSubmit(formProps) {
//    this.props.signinUser(formProps);
//   }

//   render() {

//     const {handleSubmit} = this.props;

//     return (
//         <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
//           <Field name="email" type="text" label="Email" component={renderFormField} />
//           <Field name="password" type="password" label="Password" component={renderFormField} />
//           <button type="submit" className="btn btn-success">Sign in</button>
//           {renderAlert(this.props.errorInMessage)}
//         </form>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {errorInMessage: state.auth.errorin};
// }

// export default reduxForm({
//   form: 'signin'
// })
// (connect(mapStateToProps, actions)(Signin));


