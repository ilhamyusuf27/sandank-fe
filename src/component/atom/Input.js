import React from "react";

function Input(props) {
	const { type, placeholder } = props;
	return (
		<div className="mb-3">
			<input type={type} className="input" placeholder={placeholder} />
		</div>
	);
}

export default Input;
