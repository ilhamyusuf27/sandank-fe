import React from "react";
import { FiChevronRight } from "react-icons/fi";

function NextButton(props) {
	const { onClick } = props;
	return (
		<div className={`buttonSlider next`} onClick={onClick}>
			<FiChevronRight size={30} />
		</div>
	);
}

export default NextButton;
