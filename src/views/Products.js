import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../common/ProductCard";
import SearchBar from "../components/Products/SearchBar";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";

function Products({ products }) {
	const [categories, setCategories] = useState(null);
	const [filteredByCategory, setfilteredByCategory] = useState(products);

	const updateCategories = (catMain, catUpdate) => {
		if (catMain !== catUpdate) {
			setCategories(catUpdate);
		} else {
			setCategories(null);
		}
	};

	const filterChain = (prod, cat) => {
		if (cat === null) return prod;
		return prod.filter((a) => {
			return a.category === cat;
		});
	};

	useEffect(() => {
		setCategories(null);
		setfilteredByCategory(products);
	}, []);

	useEffect(() => {
		setfilteredByCategory(filterChain(products, categories));
		console.log(categories);
		console.log(filteredByCategory);
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
								}}>
								Men's clothing
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "women's clothing");
								}}>
								Women's clothing
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "electronics");
								}}>
								Electronics
							</button>
						</h4>
						<h4>
							<button
								onClick={() => {
									updateCategories(categories, "jewelery");
								}}>
								Jewlery
							</button>
						</h4>
					</Col>
					<Col>
						<Container fluid>
							<Row>
								<SearchBar />
							</Row>
							<Row>
								<ProductCard
									productCardItems={filteredByCategory}></ProductCard>
								{/* productCardItems={filterChain(products, categories)} */}
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
