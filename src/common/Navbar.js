import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
	const [wishListNrOfItems, setwishListNrOfItems] = useState(() => {
		const saved = localStorage.getItem("productList");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});

	useEffect(() => {
		setwishListNrOfItems(() => {
			const saved = localStorage.getItem("productList");
			const initialValue = JSON.parse(saved);
			return initialValue || "";
		});
	});

	return (
		<div className='nav_container'>
			<div className='nav_section'>
				<Link to='/' className='nav_item'>
					<h4>Home</h4>
				</Link>
				<Link to='/products' className='nav_item'>
					<h4>Poducts</h4>
				</Link>
			</div>
			<div className='nav_section nav_center_section'>
				<img
					src='https://seeklogo.com/images/L/luxury-logo-C88D07841D-seeklogo.com.png'
					alt='site_logo'
					className='nav_item'
				/>
				<h4 className='nav_item'>Logo Text if Any</h4>
			</div>
			<div className='nav_section'>
				<Link to='/wishlist' className='nav_item'>
					<h4>Wishlist({wishListNrOfItems.length})</h4>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
