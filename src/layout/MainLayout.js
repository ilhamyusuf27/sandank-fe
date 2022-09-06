import React from "react";
import Navbar from "../component/organism/Navbar";

function MainLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

export default MainLayout;
