import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header({ cartItemCount }) {
	const location = useLocation();
	const value = location.pathname;

	return (
		<div className="header">
			<h1>Pizza Shop</h1>
			<Tabs
				value={value}
				textColor="secondary"
				indicatorColor="secondary"
				aria-label="navigation tabs"
			>
				<Tab label="Home" value="/" to="/" component={Link} />
				<Tab
					label="Products"
					value="/products"
					to="/products"
					component={Link}
				/>

				{/* Cart Tab with Icon and Badge */}
				<Tab
					icon={
						<Badge badgeContent={cartItemCount} color="secondary">
							<ShoppingCartIcon />
						</Badge>
					}
					aria-label="cart"
					value="/cart"
					to="/cart"
					component={Link}
				/>
			</Tabs>
		</div>
	);
}

Header.propTypes = {
	cartItemCount: PropTypes.number.isRequired,
};

export default Header;
