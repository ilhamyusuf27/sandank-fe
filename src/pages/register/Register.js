import React from "react";
import { Link } from "react-router-dom";

// Mollecule
import Logo from "../../component/mollecule/LogoAuth";
import FormLogin from "../../component/mollecule/FormLogin";

// CSS
import style from "./Register.module.css";
import FormRegisterSeller from "../../component/mollecule/FormRegisterSeller";
import FormRegisterCustomor from "../../component/mollecule/FormRegisterCustomor";

function Register() {
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

			{custActive ? <FormRegisterCustomor /> : <FormRegisterSeller />}

			<span>
				Already have a Tokopedia account?{" "}
				<Link to={"/login"} className="link">
					Login
				</Link>
			</span>
		</div>
	);
}

export default Register;
