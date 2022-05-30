import "./SearchBar.css";

import { useEffect, useState } from "react";
function SearchBar({ handleGetSearchResults }) {
	// contains the data entered by the user in the input
	const [inputSearch, setImputSearch] = useState("");
	// sets of the inital value of 'inputSearch' to an empty string
	useEffect(() => {
		setImputSearch("");
	}, []);
	// this function passes the information from 'inputSearch' upstream to the Produt.js component
	useEffect(() => {
		handleGetSearchResults(inputSearch);
	}, [inputSearch]);
	return (
		<div className='search_container'>
			<input
				className='product_searchbar'
				value={inputSearch}
				type='text'
				placeholder='Search...'
				onChange={(e) => {
					setImputSearch(e.target.value);
				}}
			/>
		</div>
	);
}

export default SearchBar;
