import React from "react";
import "./Home.css";
import Footer from "../common/Footer";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeCategories from "../components/Home/HomeCategories";
import ProductCard from "../common/ProductCard";
import { useState, useEffect } from "react";

function Home() {
	// This variable keeps the data from the API
	const [products, setProducts] = useState(null);
	// This function fetches data from the API and stores it in the varaible 'products'
	const getProducts = async () => {
		const productsRaw = await fetch("https://fakestoreapi.com/products");
		const productJson = await productsRaw.json();
		setProducts(productJson);
	};
	// This function filters the data from 'products' so that only 8 items from the array are displayed in the trending section on the homepage
	const getTrendingProducts = (pro) => {
		if (pro !== null) {
			return pro.slice(0, 8);
		}
	};
	// Use effect with the square brackes [] sets the value of our variables when the page is first rendered
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<HomeCarousel />
			<HomeCategories productCategories={products} />
			<h2 className='trending_products'>Trending Products</h2>
			<ProductCard productCardItems={getTrendingProducts(products)} />
			<Footer />
			{console.log(getTrendingProducts(products))}
		</div>
	);
}

export default Home;
