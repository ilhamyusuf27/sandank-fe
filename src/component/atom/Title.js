import React from "react";

function Title(props) {
	const { title, desc } = props;
	return (
		<div className="titleContent">
			<h3>{title}</h3>
			<p className="text-secondary">{desc}</p>
		</div>
	);
}

export default Title;
