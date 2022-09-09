import React from "react";

import style from "../../pages/address/Address.module.css";

// component
import Input from "../../component/atom/Input";

function ModalAddAddress() {
	return (
		<div className={`modal fade ${style.modalSize}`} id="addModalAddress" tabindex="-1" aria-labelledby="addModalAddress" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className={style.modalHeader}>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
					</div>
					<div className={style.modalBody}>
						<h5 className="text-center mb-4">Add new address</h5>

						<form>
							<div className="form-text mb-2">Save address as (ex: home address, office address)</div>
							<Input type="text" placeholder="Rumah" />
							<div className="row">
								<div className="col-6">
									<div className="form-text mb-2">Recipient's name</div>
									<Input type="text" placeholder="" />
								</div>
								<div className="col-6">
									<div className="form-text mb-2">Recipient's telephone number</div>
									<Input type="text" placeholder="" />
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-text mb-2">address</div>
									<Input type="text" placeholder="" />
								</div>
								<div className="col-6">
									<div className="form-text mb-2">Postal code</div>
									<Input type="text" placeholder="" />
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="form-text mb-2">City or subdistrict</div>
									<Input type="text" placeholder="" />
								</div>
							</div>

							<div className="d-flex">
								<input className="form-check-input checkbox me-3" type="checkbox" value="" id="selectAll" />
								<div className="form-text">Make it the primary address</div>
							</div>

							<div className="d-flex justify-content-end mt-5">
								<button type="button" className="btn btn-outline-primary btn-modal me-2" data-bs-dismiss="modal">
									Close
								</button>
								<button type="button" className="btn btn-primary btn-modal">
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalAddAddress;
