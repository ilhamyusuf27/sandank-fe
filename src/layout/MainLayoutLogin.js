import React from "react";
import NavbarLogin from "../component/organism/NavbarLogin";

function MainLayout({ children }) {
	return (
		<>
			<NavbarLogin />
			{children}
		</>
	);
}

export default MainLayout;
