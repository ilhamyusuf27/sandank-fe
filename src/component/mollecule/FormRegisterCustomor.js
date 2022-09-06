import React from "react";

// Atom
import Input from "../atom/Input";
import SubmitButton from "../atom/SubmitButton";

function FormRegisterCustomor() {
	return (
		<form className="form mb-4">
			<Input type="text" placeholder="Name" />
			<Input type="email" placeholder="Email" />
			<Input type="password" placeholder="Password" />
			<SubmitButton value="REGISTER" />
		</form>
	);
}

export default FormRegisterCustomor;
