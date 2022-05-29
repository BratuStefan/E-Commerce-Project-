import "./HomeCategories.css";
import { Container, Row, Col } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeCategories({ productCategories }) {
	return (
		<Container className='categories_container' fluid>
			<Row className='gap-3' id='categories_row'>
				{productCategories ? (
					productCategories
						.reduce((unique, o) => {
							if (!unique.some((obj) => obj.category === o.category)) {
								unique.push(o);
							}
							return unique;
						}, [])
						.map((cat, index) => {
							return (
								<Col
									key={"cat_" + index}
									lg='5'
									sm='11'
									id='catogories_column'
									className='mt-3'>
									<h3>{cat.category}</h3>
									<Link to='products'>
										<button className='category_button'>DISCOVER NOW</button>
									</Link>
									{cat.category === `men's clothing` ? (
										<img
											src='https://i.pinimg.com/736x/12/52/29/12522937c5e329344f3035e6711bdb71.jpg'
											alt="men's_clothing_category_image"
											id='category_images'
										/>
									) : cat.category === "women's clothing" ? (
										<img
											src='https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765'
											alt="women's_clothing_category_image"
											id='category_images'
										/>
									) : cat.category === "jewelery" ? (
										<img
											src='https://images.unsplash.com/photo-1558554745-e862ef8538bd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764'
											alt='jewelery_category_image'
											id='category_images'
										/>
									) : cat.category === "electronics" ? (
										<img
											src='https://images.unsplash.com/photo-1575561986697-55ebf69dc571?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765'
											alt='electronics_catogory_image'
											id='category_images'
										/>
									) : (
										""
									)}
								</Col>
							);
						})
				) : (
					<>Loading</>
				)}
			</Row>
		</Container>
	);
}

export default HomeCategories;
// 	// const [filteredCategories, setFilteredCategories] = useState('')

// 	// const filteredCategories =  productCategories.reduce((unique, o) => {
// 	// 	if (!unique.some((obj) => obj.category === o.category)) {
// 	// 		unique.push(o);
// 	// 	}
// 	// 	return unique;
// 	// }, []);

// 	return (
// 		<>
// 			<div>
// 				{filteredCategories ? (
// 					filteredCategories.map((product, index) => {
// 						return (
// 							<div key={"product_" + index}>
// 								<div>
// 									<h3>{product.category}</h3>
// 									<Link to='/products'>
// 										<button>DISCOVER NOW</button>
// 									</Link>
// 								</div>
// 								<div>
// 									<img src='' alt='placeholder' />
// 								</div>
// 							</div>
// 						);
// 					})
// 				) : (
// 					<>Loading...</>
// 				)}
// 			</div>
// 		</>
// 	);
// }
// export default HomeCategories;
