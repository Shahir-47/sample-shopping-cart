import { Link } from "react-router-dom";

function Error() {
	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
			<Link to="/">
				<button
					style={{
						padding: "10px 20px",
						backgroundColor: "#1976d2",
						color: "#fff",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						marginTop: "20px",
					}}
				>
					Go to Home Page
				</button>
			</Link>
		</div>
	);
}

export default Error;
