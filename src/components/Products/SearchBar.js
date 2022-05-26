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
		<div>
			<input
				value={inputSearch}
				type='text'
				placeholder='search...'
				onChange={(e) => {
					setImputSearch(e.target.value);
				}}
			/>
		</div>
	);
}

export default SearchBar;
