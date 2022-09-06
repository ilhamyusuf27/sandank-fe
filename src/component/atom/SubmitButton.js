import React from "react";

function SubmitButton(props) {
	const { value } = props;
	return (
		<button type="submit" className="submitButton">
			{value}
		</button>
	);
}

export default SubmitButton;
