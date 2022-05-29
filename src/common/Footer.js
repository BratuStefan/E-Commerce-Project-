import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
	FacebookFilled,
	TwitterSquareFilled,
	LinkedinFilled,
	GithubFilled,
} from "@ant-design/icons";

function Footer() {
	return (
		<div className='footer_container'>
			<div className='footer_section_description'>
				<div className='footer_nav_links'>
					<Link to='/'>
						<h4>Home</h4>
					</Link>
					<h4 className='footer_link_separator'>-</h4>
					<Link to='/products'>
						<h4>Products</h4>
					</Link>
				</div>
				<div className='footer_company_name'>White Fox Inc. @ 2022</div>
			</div>
			<div className='footer_section_social_media'>
				<a href='http://facebook.com'>
					<FacebookFilled className='footer_external_link' />
				</a>
				<a href='http://twitter.com'>
					<TwitterSquareFilled className='footer_external_link' />
				</a>
				<a href='http://linkedin.com'>
					<LinkedinFilled className='footer_external_link' />
				</a>
				<a href='http://github.com/'>
					<GithubFilled className='footer_external_link' />
				</a>
			</div>
		</div>
	);
}

export default Footer;
