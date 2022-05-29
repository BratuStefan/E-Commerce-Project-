import "./SearchBar.css";

import { useEffect, useState } from "react";
function SearchBar({ handleGetSearchResults }) {
	const [inputSearch, setImputSearch] = useState("");

	useEffect(() => {
		setImputSearch("");
	}, []);

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
