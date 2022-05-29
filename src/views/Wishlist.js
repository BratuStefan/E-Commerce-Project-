import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Wishlist.css";
import Footer from "../common/Footer";

function Wishlist() {
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

	return (
		<>
			<h2 className='wishlist_heading'>Wishlist</h2>
			<div id='wishlist_container' fluid>
				<table>
					<tr className='wishlist_table_headings'>
						<th>Nr.</th>
						<th>Product Image</th>
						<th>Product Name</th>
						<th>Unit Price</th>
						<th>Delete Item</th>
					</tr>
					{wishItem ? (
						wishItem.map((prod, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>
										<img
											className='wishlist_product_image'
											src={prod.image}
											alt='wishlist_product_image'
										/>
									</td>
									<td>
										<h3>{prod.title}</h3>
									</td>
									<td>{prod.price}$</td>
									<td>
										<button
											className='wishlist_button'
											onClick={() => {
												onDelete(prod.id);
											}}>
											DELETE
										</button>
									</td>
								</tr>
							);
						})
					) : (
						<>Please Add An Item!</>
					)}
				</table>
			</div>
			<Footer />
		</>
	);
}
export default Wishlist;
