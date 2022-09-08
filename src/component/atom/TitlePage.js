import React from "react";

function TitlePage(props) {
	const { title } = props;
	return <h3 className="titlePage">{title}</h3>;
}

export default TitlePage;
