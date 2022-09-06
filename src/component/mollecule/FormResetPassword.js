import React from "react";
import { Link } from "react-router-dom";

// Atom
import Input from "../atom/Input";
import SubmitButton from "../atom/SubmitButton";

function FormResetPassword() {
	return (
		<form className="form mb-4">
			<Input type="password" placeholder="Password" />
			<Input type="password" placeholder="Confirmation New Password" />
			<div className="containerLink">
				<Link className="link" to="/reset">
					Forgot Password?
				</Link>
			</div>
			<Link to="/login">
				<SubmitButton value="SUBMIT" />
			</Link>
		</form>
	);
}

export default FormResetPassword;
