import React from 'react';
import { connect } from 'react-redux';
import { createSelectorCreator } from 'reselect';

import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../Redux/cart/cart.selector';

const CartDropDown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createSelectorCreator({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CartDropDown);
