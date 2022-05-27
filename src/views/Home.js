import React from "react";
import "./Home.css";
import Footer from "../common/Footer";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeCategories from "../components/Home/HomeCategories";
import ProductCard from "../common/ProductCard";
import { useState, useEffect } from "react";

function Home({ products }) {
	// This function filters the data from 'products' so that only 8 items from the array are displayed in the trending section on the homepage
	const getTrendingProducts = (pro) => {
		if (pro !== null) {
			return pro.slice(0, 8);
		}
	};

	return (
		<div>
			<HomeCarousel />
			<HomeCategories productCategories={products} />
			<h2 className='trending_products'>Trending Products</h2>
			<ProductCard productCardItems={getTrendingProducts(products)} />
			<Footer />
		</div>
	);
}

export default Home;
