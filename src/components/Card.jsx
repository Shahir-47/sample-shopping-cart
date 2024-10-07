import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Card({
	product,
	cartItems,
	addToCart,
	updateCartItem,
	removeFromCart,
}) {
	const [quantity, setQuantity] = useState(0);

	// Check if the product is already in the cart
	useEffect(() => {
		const cartItem = cartItems.find((item) => item.id === product.id);
		if (cartItem) {
			setQuantity(cartItem.quantity);
		} else {
			setQuantity(0); // Reset to 0 if product is not in the cart
		}
	}, [cartItems, product.id]);

	const handleAddToCart = () => {
		addToCart({ ...product, quantity: 1 });
	};

	const handleIncreaseQuantity = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		updateCartItem(product.id, newQuantity);
	};

	const handleDecreaseQuantity = () => {
		const newQuantity = quantity - 1;
		if (newQuantity <= 0) {
			removeFromCart(product.id); // Remove from cart if quantity reaches 0
			setQuantity(0);
		} else {
			setQuantity(newQuantity);
			updateCartItem(product.id, newQuantity);
		}
	};

	return (
		<div
			style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}
		>
			<h2>{product.title}</h2>
			<p>${product.price}</p>

			{quantity === 0 ? (
				<button
					style={{
						marginTop: "10px",
						backgroundColor: "#1976d2",
						color: "#fff",
						padding: "10px",
						border: "none",
						borderRadius: "5px",
					}}
					onClick={handleAddToCart}
				>
					Add to Cart
				</button>
			) : (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<label>Quantity</label>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<button
							onClick={handleDecreaseQuantity}
							style={{ padding: "5px 10px" }}
						>
							-
						</button>
						<input
							type="number"
							value={quantity}
							readOnly
							style={{ width: "50px", textAlign: "center" }}
						/>
						<button
							onClick={handleIncreaseQuantity}
							style={{ padding: "5px 10px" }}
						>
							+
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

Card.propTypes = {
	product: PropTypes.object.isRequired,
	cartItems: PropTypes.array.isRequired,
	addToCart: PropTypes.func.isRequired,
	updateCartItem: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default Card;
