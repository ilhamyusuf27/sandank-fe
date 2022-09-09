import React from "react";

function ButtonTabs(props) {
	const { title, id, target, actived } = props;
	return (
		<button className={`nav-link ${actived ? "active" : null}`} id={id} data-bs-toggle="tab" data-bs-target={`#${target}`} type="button" role="tab" aria-controls="nav-home" aria-selected="true">
			{title}
		</button>
	);
}

export default ButtonTabs;
