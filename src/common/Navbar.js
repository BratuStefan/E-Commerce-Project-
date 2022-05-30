import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
	// contains the existing data from loaclstorage. It's used  to dsiplay the numer of itmes present in wishlist
	const [wishListNrOfItems, setWishListNrOfItems] = useState(() => {
		const saved = localStorage.getItem("productList");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	});
	// sets wishListNrOfItems to contain data from local storage. The function runs constantly to check is localstorage is updated
	useEffect(() => {
		setWishListNrOfItems(() => {
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
					src='https://i.pinimg.com/736x/72/ed/3a/72ed3a4ee99cdd29917b5affcafa2e63.jpg'
					alt='site_logo'
					className='nav_item'
				/>
				<h4 className='nav_item'>White Fox</h4>
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
