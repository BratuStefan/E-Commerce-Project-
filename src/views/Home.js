import React from "react";
import "./Home.css";
import Footer from "../common/Footer";
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeCategories from "../components/Home/HomeCategories";
import ProductCard from "../common/ProductCard";
import ScrollToTop from "react-scroll-to-top";

function Home({ products }) {
	// This function filters the data from 'products' so that only 8 items from the array are displayed in the trending section on the homepage
	const getTrendingProducts = (pro) => {
		if (pro !== null) {
			return pro.slice(0, 8);
		}
	};

	return (
		<div>
			<div style={{ zIndex: "-2" }}>
				<HomeCarousel />
			</div>
			<h2 className='categories_heading'>Product Categories</h2>
			<HomeCategories productCategories={products} />
			<h2 className='trending_products'>Trending Products</h2>
			<ProductCard productCardItems={getTrendingProducts(products)} />
			<ScrollToTop />
			<Footer />
		</div>
	);
}

export default Home;
