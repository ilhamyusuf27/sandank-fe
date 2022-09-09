/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
	const { current } = props;
	return (
		<nav className="mainBreadcrumb" aria-label="breadcrumb">
			<ol className="breadcrumb">
				<li className="breadcrumb-item">
					<Link to="/home" passHref>
						<a>Home</a>
					</Link>
				</li>
				<li className="breadcrumb-item" aria-current="page">
					Category
				</li>
				<li className="breadcrumb-item active" aria-current="page">
					{current}
				</li>
			</ol>
		</nav>
	);
}

export default Breadcrumb;
