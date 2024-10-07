import { useEffect, useState } from "react";
import Card from "../components/Card";
import PropTypes from "prop-types";

function Product({ addToCart, updateCartItem, removeFromCart, cartItems }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

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
