import React from "react";

import Input from "../atom/Input";
import style from "../../pages/profile/Profile.module.css";

function InputProfile(props) {
	const { type, placeholder, title } = props;
	return (
		<div className="row">
			<div className="col-3 d-flex align-items-center justify-content-end">
				<p className={style.inputTitle}>{title}</p>
			</div>
			<div className="col-9">
				<Input type={type} placeholder={placeholder} />
			</div>
		</div>
	);
}

export default InputProfile;
