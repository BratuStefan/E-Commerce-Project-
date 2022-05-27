import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";

function Wishlist({ handleGetWishItemNumber }) {
	const [wishItem, setWishItem] = useState([]);

	const onDelete = (id) => {
		const filteredArray = wishItem.filter((prod) => {
			return prod.id !== id;
		});
		setWishItem(filteredArray);
		localStorage.setItem("productList", JSON.stringify(filteredArray));
	};

	useEffect(() => {
		const prodListStorage = localStorage.getItem("productList");
		if (prodListStorage) {
			const prodArray = JSON.parse(prodListStorage);
			setWishItem(prodArray);
		}
	}, []);

	useEffect(() => {
		handleGetWishItemNumber(wishItem);
	}, [wishItem]);

	return (
		<>
			<Container style={{ border: "1px solid black", minHeight: "50vh" }}>
				<Row>
					{wishItem ? (
						wishItem.map((prod) => {
							return (
								<Row key={"prod_wishlist_" + prod.id}>
									<Col style={{ display: "flex", gap: "3%" }}>
										<h3>{prod.title}</h3>
										<Button
											color='danger'
											onClick={() => {
												onDelete(prod.id);
											}}>
											Sterge!
										</Button>
									</Col>
								</Row>
							);
						})
					) : (
						<>Please Add An Item!</>
					)}
				</Row>
			</Container>
		</>
	);
}
export default Wishlist;
