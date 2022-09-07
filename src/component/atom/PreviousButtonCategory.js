import React from "react";
import { FiChevronLeft } from "react-icons/fi";
function PreviousButtonCategory(props) {
	const { onClick, currentSlide } = props;
	return (
		<div className={`buttonSlider prev ${currentSlide === 0 ? "disable" : null}`} onClick={onClick}>
			<FiChevronLeft size={30} />
		</div>
	);
}

export default PreviousButtonCategory;
