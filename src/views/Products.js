import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../common/ProductCard";
import SearchBar from "../components/Products/SearchBar";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import "./Products.css";
import ScrollToTop from "react-scroll-to-top";

function Products({ products }) {
	/* products - contains all the items from the API. 
	   products is imported form App.js */
	/*categories - contains the currently sectected category.
	  categories is initally empty and is updated wit the 'updateCategories' function*/
	const [categories, setCategories] = useState(null);
	// filteredByCategory - contains the variable 'products' filtered by the variable 'categories' via the 'filterChain' fucntion
	const [filteredByCategory, setfilteredByCategory] = useState(products);
	// searchValue - retains value of the text input from the 'ProductSearch.js' component. This value is taken with the 'getSearchResults' funtion
	const [searchValue, setSearchValue] = useState("");
	/*  function updateCategories - to  catMain is passed the 'categories' variable
								  - to catUpdate is passed a string from the 'onCLick' functions from the buttons under the H2 - Product Categories
	heading
								  - if 'categories' is empty, it gets uptaded vith the value passed in the catUpdate parameter
								  - if 'categories' is not empty, its value is set to null*/
	const updateCategories = (catMain, catUpdate) => {
		if (catMain !== catUpdate) {
			setCategories(catUpdate);
		} else {
			setCategories(null);
		}
	};
	// this function is passed to SeachBar.js via props and serves to get the data from the input and update the variable 'searchValue' with it
	const getSearchResults = (input) => {
		setSearchValue(input);
	};
	// filters the data from raw API data from 'product' with the data from 'cayegories'. The result is assigned to the variable 'filteredByCategory' in a useEffect
	const filterChain = (prod, cat) => {
		if (cat === null) return prod;
		return prod.filter((a) => {
			return a.category === cat;
		});
	};
	// filters the data from 'filteredByCategory' with the data from 'searchValue'
	const filterSearch = (filteredCat, searchResults) => {
		if (!searchResults) return filteredCat;
		return filteredCat.filter((b) => {
			return b.title.toLowerCase().includes(searchResults);
		});
	};
	// sets value of variables on first render
	useEffect(() => {
		setCategories(null);
		setfilteredByCategory(products);
	}, []);
	// sets value of 'filteredByCategory' based on the changes in 'categories'
	useEffect(() => {
		setfilteredByCategory(filterChain(products, categories));
	}, [categories]);

	return (
		<>
			<Container fluid id='products_main_container'>
				<Row>
					<Col lg='3'>
						<h2>Product Categories</h2>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "men's clothing");
								}}
								style={{
									backgroundColor:
										categories === "men's clothing" ? "black" : "white",
									color: categories === "men's clothing" ? "white" : "black",
								}}
								className='producs_category_buttons'>
								Men's clothing
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "women's clothing");
								}}
								style={{
									backgroundColor:
										categories === "women's clothing" ? "black" : "white",
									color: categories === "women's clothing" ? "white" : "black",
								}}
								className='producs_category_buttons'>
								Women's clothing
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "electronics");
								}}
								style={{
									backgroundColor:
										categories === "electronics" ? "black" : "white",
									color: categories === "electronics" ? "white" : "black",
								}}
								className='producs_category_buttons'>
								Electronics
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "jewelery");
								}}
								style={{
									backgroundColor:
										categories === "jewelery" ? "black" : "white",
									color: categories === "jewelery" ? "white" : "black",
								}}
								className='producs_category_buttons'>
								Jewlery
							</button>
						</h4>
					</Col>
					<Col>
						<Container fluid>
							<Row>
								<SearchBar
									handleGetSearchResults={getSearchResults}
									id='products_searchbar_fullscreen'
								/>
							</Row>
							<Row>
								<ProductCard
									productCardItems={filterSearch(
										filteredByCategory,
										searchValue
									)}></ProductCard>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
			<ScrollToTop />
			<Footer />
		</>
	);
}

export default Products;
