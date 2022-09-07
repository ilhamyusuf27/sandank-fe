import React from "react";
import { FiChevronRight } from "react-icons/fi";

function NextButtonCategory(props) {
	const { onClick, currentSlide } = props;
	return (
		<div className={`buttonSlider next ${currentSlide === 3.2 ? "disable" : null}`} onClick={onClick}>
			<FiChevronRight size={30} />
		</div>
	);
}

export default NextButtonCategory;
