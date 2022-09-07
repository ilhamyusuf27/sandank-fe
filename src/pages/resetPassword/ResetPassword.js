import React from "react";
import { Link } from "react-router-dom";

// Mollecule
import LogoAuth from "../../component/mollecule/LogoAuth";
import FormResetPassword from "../../component/mollecule/FormResetPassword";

// CSS
import style from "./ResetPassword.module.css";

function ResetPassword() {
	return (
		<div className={`${style.container}`}>
			<LogoAuth />

			<h4 className="mt-4 mb-3">Reset Password</h4>

			<span className="link mb-5">You need to change your password to activate your account</span>

			<FormResetPassword />
		</div>
	);
}

export default ResetPassword;
