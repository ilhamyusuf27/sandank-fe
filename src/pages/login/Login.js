import React from "react";
import { Link } from "react-router-dom";

// Mollecule
import Logo from "../../component/mollecule/LogoAuth";
import FormLogin from "../../component/mollecule/FormLogin";

// CSS
import style from "./Login.module.css";

function Login() {
	const [custActive, setCustActive] = React.useState(true);
	const [selActive, setSelActive] = React.useState(false);

	const handleCust = () => {
		if (!custActive) {
			setCustActive(true);
			setSelActive(false);
		}
	};

	const handleSel = () => {
		if (!selActive) {
			setCustActive(false);
			setSelActive(true);
		}
	};

	return (
		<div className={`${style.container}`}>
			<Logo />

			<h4 className="mt-4 mb-5">Please login with your account</h4>

			<div className="d-flex mb-5">
				<div className={`buttonCustommer ${custActive ? "isActive" : "notActive"}`} onClick={handleCust}>
					<span>Custommer</span>
				</div>
				<div className={`buttonSeller ${selActive ? "isActive" : "notActive"}`} onClick={handleSel}>
					<span>Seller</span>
				</div>
			</div>

			{custActive ? <FormLogin /> : <FormLogin />}

			<span>
				Don't have a Tokopedia account?{" "}
				<Link to={"/register"} className="link">
					Register
				</Link>
			</span>
		</div>
	);
}

export default Login;
