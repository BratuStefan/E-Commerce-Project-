import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../common/ProductCard";
import SearchBar from "../components/Products/SearchBar";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";

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

	const getSearchResults = (input) => {
		setSearchValue(input);
	};

	const filterChain = (prod, cat) => {
		if (cat === null) return prod;
		return prod.filter((a) => {
			return a.category === cat;
		});
	};

	const filterSearch = (filteredCat, searchResults) => {
		if (!searchResults) return filteredCat;
		return filteredCat.filter((b) => {
			return b.title.toLowerCase().includes(searchResults);
		});
	};

	useEffect(() => {
		setCategories(null);
		setfilteredByCategory(products);
	}, []);

	useEffect(() => {
		setfilteredByCategory(filterChain(products, categories));
	}, [categories]);

	return (
		<>
			<Container fluid>
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
										categories === "men's clothing" ? "red" : "inherit",
								}}>
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
										categories === "women's clothing" ? "red" : "inherit",
								}}>
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
										categories === "electronics" ? "red" : "inherit",
								}}>
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
										categories === "jewelery" ? "red" : "inherit",
								}}>
								Jewlery
							</button>
						</h4>
					</Col>
					<Col>
						<Container fluid>
							<Row>
								<SearchBar handleGetSearchResults={getSearchResults} />
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
			<Footer />
		</>
	);
}

export default Products;
