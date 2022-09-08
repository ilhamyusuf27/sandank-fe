import React from "react";

// style
import style from "./MyBag.module.css";

// Layout
import MainLayout from "../../layout/MainLayout";
import Counter from "../../component/mollecule/Counter";

function MyBag() {
	return (
		<div className={style.myBag}>
			<MainLayout />
			<div className="container">
				<h3 className={style.title}>MyBag</h3>

				<div className="row">
					<div className="col-8 pe-5">
						<div className={style.select}>
							<div className={style.form}>
								<input className="form-check-input checkbox me-4" type="checkbox" value="" id="selectAll" />
								<label className={`form-check-label ${style.label}`} for="selectAll">
									Select all items
								</label>
								<span className="text-secondary ms-2">(2 items selected)</span>
							</div>

							<h6 className={`link ${style.delete}`}>Delete</h6>
						</div>

						<div className={style.itemSelect}>
							<div className={style.itemDetail}>
								<input className="form-check-input checkbox me-4" type="checkbox" value="" id="selectAll" />
								<div className={style.itemImage}></div>
								<div className={style.itemDesc}>
									<h5 className={style.itemTitle}>Men's formal suit - Black</h5>
									<span className={`text-secondary ${style.itemStore}`}>Zalora Cloth</span>
								</div>
							</div>

							<div className={style.itemQuantiti}>
								<Counter />
							</div>

							<h5 className="mb-0">$20.0</h5>
						</div>
					</div>
					<div className="col-4 ps-2">
						<div className={style.shopingSummary}>
							<h5 className={style.itemTitle}>Shopping summary</h5>
							<div className={style.priceDetail}>
								<h5 className="text-secondary mb-0">Total price</h5>
								<h5 className="mb-0">$40.0</h5>
							</div>
							<button type="button" className="btn btn-primary btn-modal w-100">
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyBag;
