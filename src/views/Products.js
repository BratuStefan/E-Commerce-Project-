import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../common/ProductCard";
import SearchBar from "../components/Products/SearchBar";
import Footer from "../common/Footer";

function Products() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col>
						<h2>Product Categories</h2>
						<h4>
							<button>Accesories</button>
						</h4>
						<h4>
							<button>Fashion</button>
						</h4>
						<h4>
							<button>Men</button>
						</h4>
					</Col>
					<Col>
						<Container fluid>
							<Row>
								<SearchBar />
							</Row>
							<Row>
								<ProductCard></ProductCard>
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
