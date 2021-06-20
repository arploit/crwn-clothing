import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.components';
import { connect } from 'react-redux';

import { addItem } from '../Redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<div className="collection-item" key={id}>
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchtoProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
