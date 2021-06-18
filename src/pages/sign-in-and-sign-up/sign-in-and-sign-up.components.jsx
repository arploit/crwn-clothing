import React, { Component } from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/signin/SignIn.components';

class SignInAndSignUp extends Component {
	render() {
		return (
			<div className="SignInAndSignUp">
				<SignIn />
			</div>
		);
	}
}

export default SignInAndSignUp;
