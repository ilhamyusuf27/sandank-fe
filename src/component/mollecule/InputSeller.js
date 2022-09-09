import React from "react";

import Input from "../atom/Input";
import style from "../../pages/profile/Profile.module.css";

function InputSeller(props) {
	const { type, placeholder, title } = props;
	return (
		<div className="">
			<p className={style.inputTitle}>{title}</p>

			<Input type={type} placeholder={placeholder} />
		</div>
	);
}

export default InputSeller;
