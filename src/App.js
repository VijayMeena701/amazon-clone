import React from "react";
import "./App.css";
//pages and components

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
