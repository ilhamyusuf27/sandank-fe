import React from "react";
import logo from "../../asset/images/logo.svg";

function Logo() {
	return (
		<div className="d-flex align-items-start">
			<img src={logo} alt="logo" className="logo" />
			<h2 className="textLogo">Sandank</h2>
		</div>
	);
}

export default Logo;
