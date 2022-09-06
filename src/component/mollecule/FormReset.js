import React from "react";
import { Link } from "react-router-dom";

// Atom
import Input from "../atom/Input";
import SubmitButton from "../atom/SubmitButton";

function FormReset() {
	return (
		<form className="form mb-4">
			<Input type="email" placeholder="Email" />
			<div className="containerLink">
				<Link className="link" to="/reset">
					Forgot Password?
				</Link>
			</div>
			<Link to="/reset-password">
				<SubmitButton value="SUBMIT" />
			</Link>
		</form>
	);
}

export default FormReset;
