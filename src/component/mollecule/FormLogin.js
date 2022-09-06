import React from "react";
import { Link } from "react-router-dom";

// Atom
import Input from "../../component/atom/Input";
import SubmitButton from "../../component/atom/SubmitButton";

function FormLogin() {
	return (
		<form className="form mb-4">
			<Input type="email" placeholder="Email" />
			<Input type="password" placeholder="Password" />
			<div className="containerLink">
				<Link className="link" to="/reset">
					Forgot Password?
				</Link>
			</div>
			<SubmitButton value="LOG IN" />
		</form>
	);
}

export default FormLogin;
