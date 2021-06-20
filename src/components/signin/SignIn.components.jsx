import React, { Component } from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword({ email, password });
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log('Sign In Error', error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="Email"
					/>

					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={this.state.password}
						label="Password"
					/>
					<div className="buttons">
						<CustomButton type="submit" isGoogleSignIn={false}>
							Sign In
						</CustomButton>
						<CustomButton
							type="button"
							onClick={signInWithGoogle}
							isGoogleSignIn={true}>
							Google SignIn
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
