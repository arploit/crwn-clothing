import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../components/Redux/cart/cart.selector';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span className="">Product</span>
				</div>
				<div className="header-block">
					<span className="">Description</span>
				</div>
				<div className="header-block">
					<span className="">Quantity</span>
				</div>
				<div className="header-block">
					<span className="">Price</span>
				</div>
				<div className="header-block">
					<span className="">Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}

			<div className="total">
				<span>TOTAL:${total}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
