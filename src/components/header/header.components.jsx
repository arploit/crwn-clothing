import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.components';
import CartDropDown from '../cart-dropdown/cart-dropdown.components';
import { selectCurrentUser } from '../Redux/user/user.selector';
import { selectCartHidden } from '../Redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	// currentUser: selectCurrentUser(state),
	// hidden: selectCartHidden(state),
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
