import React from "react";
import logo from "../../asset/images/logo.svg";

function Logo() {
	return (
		<div className="d-flex align-items-center">
			<img src={logo} alt="logo" />
			<h1 className="textLogo">Sandank</h1>
		</div>
	);
}

export default Logo;
