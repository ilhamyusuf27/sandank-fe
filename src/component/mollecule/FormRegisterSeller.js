import React from "react";
import { Link } from "react-router-dom";

// Atom
import Input from "../atom/Input";
import SubmitButton from "../atom/SubmitButton";

function FormRegisterSeller() {
	return (
		<form className="form mb-4">
			<Input type="text" placeholder="Name" />
			<Input type="email" placeholder="Email" />
			<Input type="text" placeholder="Phone number" />
			<Input type="text" placeholder="Store name" />
			<Input type="password" placeholder="Password" />
			<Link to="/login">
				<SubmitButton value="REGISTER" />
			</Link>
		</form>
	);
}

export default FormRegisterSeller;
