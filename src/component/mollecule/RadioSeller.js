import React from "react";

import style from "../../pages/profile/Profile.module.css";
function RadioSeller() {
	return (
		<div>
			<p className={style.inputTitle}>Stock</p>

			<div className=" d-flex">
				<div className="form-check">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
					<label className="form-check-label" for="flexRadioDefault1">
						Baru
					</label>
				</div>

				<div className="form-check ms-5">
					<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
					<label className="form-check-label" for="flexRadioDefault1">
						Bekas
					</label>
				</div>
			</div>
		</div>
	);
}

export default RadioSeller;
