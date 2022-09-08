import React from "react";

import style from "../../pages/profile/Profile.module.css";
function RadioProfile() {
	return (
		<div className="row">
			<div className="col-3 d-flex align-items-center justify-content-end">
				<p className={style.inputTitle}>Gender</p>
			</div>
			<div className="col-9 d-flex">
				<div className="form-check">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
					<label className="form-check-label" for="flexRadioDefault1">
						Laki-laki
					</label>
				</div>

				<div className="form-check ms-5">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
					<label className="form-check-label" for="flexRadioDefault1">
						Perempuan
					</label>
				</div>
			</div>
		</div>
	);
}

export default RadioProfile;
