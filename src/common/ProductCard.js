import "./ProductCard.css";
import { Container, Row, Col } from "reactstrap";

function ProductCard({ productCardItems }) {
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
									{product.price}$ <h5>Add To Wishlist</h5>
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
