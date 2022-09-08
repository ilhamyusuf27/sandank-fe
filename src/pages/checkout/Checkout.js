import React from "react";

// style
import style from "./Checkout.module.css";

// image
import gopay from "../../asset/images/gopay.png";
import pos from "../../asset/images/pos.png";
import mastercard from "../../asset/images/mastercard.png";

// Layout
import MainLayout from "../../layout/MainLayout";
import TitlePage from "../../component/atom/TitlePage";
import Input from "../../component/atom/Input";

function Checkout() {
	return (
		<>
			<MainLayout />
			<div className="main">
				<div className="container">
					<TitlePage title="Checkout" />

					<div className="row">
						<div className="col-8 pe-5">
							<div className={style.select}>
								<h6>Andreas Jane</h6>
								<p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
								<button type="button" className="btn btn-outline-primary btn-modal w-50" data-bs-toggle="modal" data-bs-target="#modalAddress">
									Choose another address
								</button>
							</div>

							<div className={style.itemSelect}>
								<div className={style.itemDetail}>
									<div className={style.itemImage}></div>
									<div className={style.itemDesc}>
										<h5 className={style.itemTitle}>Men's formal suit - Black</h5>
										<span className={`text-secondary ${style.itemStore}`}>Zalora Cloth</span>
									</div>
								</div>

								<h5 className="mb-0">$20.0</h5>
							</div>
						</div>
						<div className="col-4 ps-2">
							<div className={style.shopingSummary}>
								<h5 className={`mb-4 ${style.itemTitle}`}>Shopping summary</h5>
								<div className={style.priceDesc}>
									<span className="mb-0">Order</span>
									<h5 className="mb-0">$40.0</h5>
								</div>
								<div className={style.priceDesc}>
									<span className="mb-0">Delivery</span>
									<h5 className="mb-0">$40.0</h5>
								</div>
								<hr className="w-100" />
								<div className={style.priceDetail}>
									<h5 className={`mb-0 ${style.titlePriceDetail}`}>Shopping summary</h5>
									<h5 className={`mb-0 ${style.price}`}>$40.0</h5>
								</div>
								<button type="button" className="btn btn-primary btn-modal w-100" data-bs-toggle="modal" data-bs-target="#paymentModal">
									Select payment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal add address */}
			<div className={`modal fade ${style.modalSize}`} id="modalAddress" tabindex="-1" aria-labelledby="modalAddress" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className={style.modalHeader}>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div>
						<div className={style.modalBody}>
							<h5 className="text-center mb-4">Choose another address</h5>
							<div className={style.addNewAddress} data-bs-toggle="modal" data-bs-target="#addModalAddress">
								<h6 className="text-center">Add new adress</h6>
							</div>
							<div className={style.currentAddress}>
								<h6>Andreas Jane</h6>
								<p className="mb-4">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
								<h6 className={style.changeAddress} data-bs-toggle="modal" data-bs-target="#addModalAddress">
									Change address
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>

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

			<div className="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className={style.btnModalClose} data-bs-dismiss="modal" aria-label="Close" />
							<h5 className="modal-title" id="exampleModalLabel">
								Payment
							</h5>
						</div>

						<div className="modal-body px-4">
							<h6 className="mt-3 mb-4">Payment method</h6>

							<div className="d-flex flex-column justify-content-between">
								<div className="row mb-4">
									<div className="col-3">
										<img src={gopay} alt="gopay" />
									</div>
									<div className="col-8 d-flex align-items-center">
										<h6 className="mb-0">Gopay</h6>
									</div>
									<div className="col-1">
										<input className="form-check-input checkbox me-3" type="checkbox" value="" id="selectAll" />
									</div>
								</div>

								<div className="row mb-4">
									<div className="col-3">
										<img src={pos} alt="gopay" />
									</div>
									<div className="col-8 d-flex align-items-center">
										<h6 className="mb-0">Pos Indonesia</h6>
									</div>
									<div className="col-1">
										<input className="form-check-input checkbox me-3" type="checkbox" value="" id="selectAll" />
									</div>
								</div>

								<div className="row mb-4">
									<div className="col-3">
										<img src={mastercard} alt="gopay" />
									</div>
									<div className="col-8 d-flex align-items-center">
										<h6 className="mb-0">Mastercard</h6>
									</div>
									<div className="col-1">
										<input className="form-check-input checkbox me-3" type="checkbox" value="" id="selectAll" />
									</div>
								</div>
							</div>
						</div>

						<div className="modal-body px-4">
							<h6>Shopping summary</h6>

							<div className={style.priceDesc}>
								<span className="mb-0">Order</span>
								<h5 className="mb-0">$40.0</h5>
							</div>
							<div className={style.pricePayment}>
								<span className="mb-0">Delivery</span>
								<h5 className="mb-0">$5.0</h5>
							</div>
						</div>
						<div className="modal-footer">
							<div>
								<h6>Shopping summary</h6>
								<h6 className={`mb-0 ${style.price}`}>$40.0</h6>
							</div>
							<button type="button" className="btn btn-primary btn-modal">
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Checkout;
