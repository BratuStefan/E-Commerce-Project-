import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Products from "./views/Products";
import Wishlist from "./views/Wishlist";
import Navbar from "./common/Navbar";
import "./App.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<div style={{ marginTop: "90px" }}>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/products' element={<Products />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
