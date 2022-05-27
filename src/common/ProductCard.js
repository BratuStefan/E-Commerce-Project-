import "./ProductCard.css";
import { Container, Row, Col } from "reactstrap";

function ProductCard({ productCardItems }) {
	const addToWishlist = (product) => {
		const productStorage = localStorage.getItem("productList");
		if (productStorage === null) {
			const productList = [];
			productList.push(product);
			localStorage.setItem("productList", JSON.stringify(productList));
		} else {
			const storageArray = JSON.parse(productStorage);
			if (
				!storageArray.find((productStorage) => {
					return productStorage.id === product.id;
				})
			) {
				storageArray.push(product);
				localStorage.setItem("productList", JSON.stringify(storageArray));
			}
		}
	};

	return (
		<Container>
			<Row>
				{productCardItems ? (
					productCardItems.map((product, index) => {
						return (
							<Col key={"product_" + index} id='product_column' lg='3'>
								<img src={product.image} alt='product_image' />
								{product.title}
								<div className='product_price_and_wishlist'>
									{product.price}${" "}
									<button
										onClick={() => {
											addToWishlist(product);
										}}>
										<h6>Add To Wishlist</h6>
									</button>
								</div>
							</Col>
						);
					})
				) : (
					<>Loading...</>
				)}
			</Row>
		</Container>
	);
}

export default ProductCard;
