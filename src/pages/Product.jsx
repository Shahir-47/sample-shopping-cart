import { useEffect, useState } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";

function Product({ addToCart, updateCartItem, removeFromCart, cartItems }) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true); // Loading state
	const [error, setError] = useState(null); // Error state

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch products");
				}
				return res.json();
			})
			.then((data) => {
				setProducts(data);
				setLoading(false); // Fetch successful
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false); // Fetch failed
			});
	}, []);

	if (loading) {
		return <p>Loading products...</p>; // Loading indicator
	}

	if (error) {
		return <p>Error: {error}</p>; // Error indicator
	}

	return (
		<div>
			<h1>Our Products</h1>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
					gap: "20px",
				}}
			>
				{products.map((product) => (
					<Card
						key={product.id}
						product={product}
						cartItems={cartItems}
						addToCart={addToCart}
						updateCartItem={updateCartItem}
						removeFromCart={removeFromCart}
					/>
				))}
			</div>
		</div>
	);
}

Product.propTypes = {
	addToCart: PropTypes.func.isRequired,
	updateCartItem: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
	cartItems: PropTypes.array.isRequired,
};

export default Product;
