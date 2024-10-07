import PropTypes from "prop-types";

function Cart({ cartItems, updateCartItem, removeFromCart }) {
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.quantity * item.price,
		0
	);

	return (
		<div>
			<h1>Your Cart</h1>

			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					<ul>
						{cartItems.map((item) => (
							<li key={item.id} style={{ marginBottom: "20px" }}>
								<div
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<div>
										<h2>{item.title}</h2>
										<p>${item.price.toFixed(2)} each</p>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "10px",
											}}
										>
											<button
												onClick={() =>
													updateCartItem(item.id, item.quantity - 1)
												}
												disabled={item.quantity === 1}
												style={{ padding: "5px 10px" }}
											>
												-
											</button>
											<input
												type="number"
												value={item.quantity}
												readOnly
												style={{ width: "50px", textAlign: "center" }}
											/>
											<button
												onClick={() =>
													updateCartItem(item.id, item.quantity + 1)
												}
												style={{ padding: "5px 10px" }}
											>
												+
											</button>
										</div>
									</div>
									<div>
										<p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
										<button
											onClick={() => removeFromCart(item.id)}
											style={{
												backgroundColor: "#e63946",
												color: "#fff",
												border: "none",
												borderRadius: "5px",
												padding: "10px",
												cursor: "pointer",
											}}
										>
											Remove
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
					<h3>Total Price: ${totalPrice.toFixed(2)}</h3>
				</div>
			)}
		</div>
	);
}

Cart.propTypes = {
	cartItems: PropTypes.array.isRequired,
	updateCartItem: PropTypes.func,
	removeFromCart: PropTypes.func,
};

export default Cart;
