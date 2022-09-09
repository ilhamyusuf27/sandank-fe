import React from "react";
import { FiChevronLeft } from "react-icons/fi";
function PreviousButton(props) {
	const { onClick } = props;
	return (
		<div className={`buttonSlider prev`} onClick={onClick}>
			<FiChevronLeft size={30} />
		</div>
	);
}

export default PreviousButton;
