import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './components/Redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import './App.css';

// COMPONENTS
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

// FIREBASE
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { SET_CURRENT_USER } from './components/Redux/user/user.action';

class App extends Component {
	unSubcribeFromAuth = null;

	componentDidMount() {
		const { SET_CURRENT_USER } = this.props;
		this.unSubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					this.props.SET_CURRENT_USER({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			SET_CURRENT_USER(userAuth);
		});
	}

	componentWillUnmount() {
		this.unSubcribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	SET_CURRENT_USER: (user) => dispatch(SET_CURRENT_USER(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
