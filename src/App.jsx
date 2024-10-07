import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import "./App.css";

function App() {
	const [cartItems, setCartItems] = useState([]);

	// Add an item to the cart
	const addToCart = (product) => {
		setCartItems((prevItems) => [...prevItems, product]);
	};

	// Update the quantity of an item in the cart
	const updateCartItem = (id, newQuantity) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	// Remove an item from the cart
	const removeFromCart = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	// Calculate the total number of items in the cart
	const cartItemCount = cartItems.reduce(
		(total, item) => total + item.quantity,
		0
	);

	return (
		<Router>
			<Header cartItemCount={cartItemCount} />
			<Routes>
				{/* Redirect /home to / */}
				<Route path="/home" element={<Navigate to="/" />} />

				{/* Normal routes */}
				<Route path="/" element={<Home />} />
				<Route
					path="/products"
					element={
						<Product
							addToCart={addToCart}
							updateCartItem={updateCartItem}
							removeFromCart={removeFromCart}
							cartItems={cartItems}
						/>
					}
				/>
				<Route
					path="/cart"
					element={
						<Cart
							cartItems={cartItems}
							updateCartItem={updateCartItem}
							removeFromCart={removeFromCart}
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
