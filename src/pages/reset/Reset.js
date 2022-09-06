import React from "react";
import { Link } from "react-router-dom";

// Mollecule
import Logo from "../../component/mollecule/Logo";
import FormReset from "../../component/mollecule/FormReset";

// CSS
import style from "./Reset.module.css";

function Reset() {
	return (
		<div className={`${style.container}`}>
			<Logo />
			<h4 className="mt-4 mb-5">Reset Password</h4>
			<FormReset />
			<span>
				Don't have a Tokopedia account?{" "}
				<Link to={"/register"} className="link">
					Register
				</Link>
			</span>
		</div>
	);
}

export default Reset;
