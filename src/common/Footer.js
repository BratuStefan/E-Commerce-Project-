import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
						<h4>Produse</h4>
					</Link>
				</div>
				<div className='footer_company_name'>Company Name @ 2022</div>
			</div>
			<div className='footer_section_social_media'>
				<a href='http://facebook.com'>
					<button>Facebook</button>
				</a>
				<a href='http://twitter.com'>
					<button>Twitter</button>
				</a>
				<a href='http://linkedin.com'>
					<button>LinkedIn</button>
				</a>
				<a href='http://github.com/'>
					<button>GitHub</button>
				</a>
			</div>
		</div>
	);
}

export default Footer;
