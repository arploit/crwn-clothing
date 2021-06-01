import React from 'react';
import './homepage.styles.css';

const HomePage = () => {
	return (
		<div className="homepage">
			<div className="directory-menu">
				<div className="menu-item">
					<div className="content">
						<h1 className="title">HATS</h1>
						<span className="subtittle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<h1 className="title">SHIRTS</h1>
						<span className="subtittle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<h1 className="title">JEANS</h1>
						<span className="subtittle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<h1 className="title">COATS</h1>
						<span className="subtittle">SHOP NOW</span>
					</div>
				</div>
				<div className="menu-item">
					<div className="content">
						<h1 className="title">GOGGLES</h1>
						<span className="subtittle">SHOP NOW</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
