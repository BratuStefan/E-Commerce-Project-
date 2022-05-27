import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import Wishlist from "./views/Wishlist";
import Navbar from "./common/Navbar";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
	// This variable keeps the data from the API
	const [products, setProducts] = useState(null);
	// This function fetches data from the API and stores it in the varaible 'products'
	const getProducts = async () => {
		const productsRaw = await fetch("https://fakestoreapi.com/products");
		const productJson = await productsRaw.json();
		setProducts(productJson);
	};
	// Use effect with the square brackes [] sets the value of our variables when the page is first rendered
	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div style={{ marginTop: "90px" }}>
					<Routes>
						<Route path='/' element={<Home products={products} />}></Route>
						<Route
							path='/products'
							element={<Products products={products} />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
