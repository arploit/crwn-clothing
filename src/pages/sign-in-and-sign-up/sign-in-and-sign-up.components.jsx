import React, { Component } from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/signin/SignIn.components';
import SignUp from '../../components/sign-up/sign-up.components';

class SignInAndSignUp extends Component {
	render() {
		return (
			<div className="SignInAndSignUp">
				<SignIn />
				<SignUp />
			</div>
		);
	}
}

export default SignInAndSignUp;
