import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";

function Wishlist() {
	const [wistList, setWishList] = useState("");
	useEffect(() => {
		setWishList("");
	}, []);
	return (
		<Container>
			<Row>
				<Col
					lg='12'
					className='ml-auto mr-auto'
					style={{ border: "1px solid red", textAlign: "center" }}>
					Wishlist
				</Col>
			</Row>
		</Container>
	);
}

export default Wishlist;
