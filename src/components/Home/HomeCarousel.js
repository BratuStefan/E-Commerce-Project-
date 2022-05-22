import "./HomeCarousel.css";
import React from "react";
import { Link } from "react-router-dom";
import { UncontrolledCarousel, Row, Col, Container } from "reactstrap";

function HomeCarousel() {
	const items = [
		{
			src: "https://cdn.shopify.com/s/files/1/0923/4522/files/fatboy_latest_header2_2048x.png?v=1647537905",
			altText: "Slide 1",
			caption: "",
			header: "",
			key: "1",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0923/4522/files/fatboy-header2_2048x.png?v=1645187587",
			altText: "Slide 2",
			caption: "",
			header: "",
			key: "2",
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0923/4522/files/1980-cwc-header_2048x.png?v=1646320537",
			altText: "Slide 3",
			caption: "",
			header: "",
			key: "3",
		},
	];
	return (
		<Container fluid className='carousel_container'>
			<Row>
				<Col md='11' className='mx-auto'>
					<UncontrolledCarousel items={items} className='carousel_proper' />
					<div className='carousel_text'>
						<h1>Experience True Confort</h1>
						<p>
							Our new line of premium watches are hand designed by the most
							seasoned swiss craftsmen <br /> to offer unparalled
							<span className='home_text_red'> quality </span> and
							<span className='home_text_red'> feel</span>
						</p>
						<Link to='/products'>
							<button>DISCOVER NOW</button>
						</Link>
					</div>
				</Col>
				<Col xs={"col-12"} className='carousel_text_mobile'>
					<div>
						<h1>Experience True Confort</h1>
						<p>
							Our new line of premium watches are hand designed by the most
							seasoned swiss craftsmen <br /> to offer unparalled
							<span className='home_text_red'> quality </span> and
							<span className='home_text_red'> feel</span>
						</p>
						<Link to='/products'>
							<button>DISCOVER NOW</button>
						</Link>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default HomeCarousel;
