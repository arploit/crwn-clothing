import React from 'react';
import './menu-item.css';

const MenuItem = (props) => {
	console.log(props.tittle, 'props');
	return (
		<div className={`${props.size} menu-item`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${props.imageUrl})`,
				}}
			/>
			<div className="content">
				<h1 className="title">{props.title}</h1>
				<span className="subtittle">{props.subtitle}</span>
			</div>
		</div>
	);
};

export default MenuItem;
