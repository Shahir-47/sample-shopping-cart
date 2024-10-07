import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>
				Welcome to <strong>Gourmet Pizza Palace</strong>!
			</h1>
			<p>
				At <strong>Gourmet Pizza Palace</strong>, we bring you the finest,
				hand-tossed pizzas crafted from the freshest ingredients. Whether
				you&apos;re craving a classic Margherita, a cheesy Pepperoni, or
				something more adventurous like our famous BBQ Chicken Supreme, we have
				the perfect pizza for you!
			</p>

			<button
				style={{
					padding: "10px 20px",
					backgroundColor: "#e63946", // You can adjust this to match your color palette
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
					fontSize: "16px",
				}}
				onClick={() => navigate("/products")}
			>
				Shop Now
			</button>

			<h2>Why Choose Us?</h2>
			<ul>
				<li>
					<strong>Artisanal Pizzas:</strong> Our dough is made fresh daily and
					hand-stretched to perfection for that perfect balance of crunch and
					chew.
				</li>
				<li>
					<strong>Premium Ingredients:</strong> We use only the highest quality,
					locally sourced ingredients. Our mozzarella is made from fresh, whole
					milk, and our sauces are simmered with secret spices for that extra
					kick!
				</li>
				<li>
					<strong>Customizable Creations:</strong> Feeling creative? Build your
					own pizza with a selection of over 20 toppings! From classic pepperoni
					to gourmet options like truffle oil and artichoke hearts, the
					possibilities are endless.
				</li>
				<li>
					<strong>Fast & Fresh:</strong> We offer fast, free delivery straight
					to your door, ensuring that your pizza arrives hot and fresh every
					time!
				</li>
			</ul>

			<h2>Customer Favorites:</h2>
			<ul>
				<li>
					<strong>The Margherita Royale:</strong> Our take on the classic
					Margherita, topped with the finest buffalo mozzarella, San Marzano
					tomatoes, fresh basil, and a drizzle of extra virgin olive oil.
				</li>
				<li>
					<strong>Pepperoni Inferno:</strong> A bold, spicy pizza loaded with
					zesty pepperoni, spicy sausage, and jalapeños for that extra heat
					lovers crave.
				</li>
				<li>
					<strong>The Veggie Delight:</strong> A colorful mix of roasted
					peppers, caramelized onions, mushrooms, and spinach, finished with a
					sprinkle of feta cheese for a burst of flavor.
				</li>
			</ul>

			<h2>Special Offers:</h2>
			<ul>
				<li>
					<strong>2-for-1 Tuesdays:</strong> Order any two large pizzas on
					Tuesday and pay for just one!
				</li>
				<li>
					<strong>Family Feast:</strong> Get two large pizzas, a garlic bread,
					and a 2-liter soda for just $24.99! Perfect for a family movie night
					or game day.
				</li>
			</ul>

			<h2>Build Your Own Pizza:</h2>
			<p>
				Want to create something unique? Choose your crust, sauce, cheese, and
				as many toppings as you like! With endless combinations, every pizza is
				a new adventure.
			</p>

			<h2>Visit Us Today!</h2>
			<p>
				Stop by our cozy restaurant for a dine-in experience or place an order
				online for fast delivery. Whether you&apos;re having a quiet night in or
				a celebration, <strong>Gourmet Pizza Palace</strong> is here to satisfy
				your pizza cravings.
			</p>
		</div>
	);
}

export default Home;
