import React from "react";
import style from "../../pages/profile/Profile.module.css";

function DateInput() {
	const months = ["Januar", "February", "Maret", "April", "Mei", "June", "July", "August", "September", "Oktober", "November", "Desember"];
	return (
		<div className="row">
			<div className="col-3 d-flex align-items-center justify-content-end">
				<p className={`${style.inputTitle} mb-0`}>Date of birth</p>
			</div>
			<div className="col-9">
				<div className="row">
					<div className="col-4">
						<select className="input">
							<option selected>1</option>
							{[...new Array(30)].map((item, index) => (
								<option>{index + 2}</option>
							))}
						</select>
					</div>
					<div className="col-4">
						<select className="input">
							<option selected>January</option>
							{months.map((item, index) => (index > 0 ? <option>{item}</option> : null))}
						</select>
					</div>
					<div className="col-4">
						<select className="input">
							<option selected>1990</option>
							{[...new Array(32)].map((i, index) => (
								<option>{1990 + (index + 1)}</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DateInput;
