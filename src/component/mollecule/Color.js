import React from "react";
import style from "../../pages/detail/Detail.module.css";

function Color() {
	return (
		<div className={`d-flex flex-wrap ${style.checkContainer} mt-4`}>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color btn-color-primary" for="red" style={{ backgroundColor: "#020202" }} />
			</div>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color" for="red" style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} />
			</div>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color" for="red" style={{ backgroundColor: "#B82222" }} />
			</div>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color" for="red" style={{ backgroundColor: "#BEA9A9" }} />
			</div>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color" for="red" style={{ backgroundColor: "#E2BB8D" }} />
			</div>
			<div>
				<input type="checkbox" className="btn-check" id="red" autocomplete="off" />
				<label className="btn-color" for="red" style={{ backgroundColor: "#151867" }} />
			</div>
		</div>
	);
}

export default Color;
