import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";

// image
import iconAccount from "../../asset/images/iconAccount.png";
import iconAddress from "../../asset/images/iconAddress.png";
import iconOrder from "../../asset/images/iconOrder.png";
import profile from "../../asset/images/profile.png";

// icon
import { RiPencilFill } from "react-icons/ri";

// style
import style from "./Address.module.css";

// component
import Input from "../../component/atom/Input";

function Address() {
	return (
		<>
			<MainLayout />

			<div className={style.containerProfile}>
				<aside className={style.menu}>
					<div className={style.listMenu}>
						<div className="row mb-5">
							<div className="col-3">
								<img src={profile} alt="profile" />
							</div>
							<div className="col-8 d-flex flex-column justify-content-evenly">
								<h6 className="mb-0">Johanes Mikael</h6>
								<div className="d-flex align-items-center">
									<RiPencilFill color="#9B9B9B" size={25} />
									<span className="text-secondary ms-2">Edit Profile</span>
								</div>
							</div>
						</div>
						<Link to="/profile">
							<div className="d-flex align-items-center mb-4">
								<img src={iconAccount} alt="akun" />
								<span className={`ms-2 ${style.textLink}`}>My Account</span>
							</div>
						</Link>

						<Link to="/profile/address">
							<div className="d-flex align-items-center mb-4">
								<img src={iconAddress} alt="address" />
								<span className={`ms-2  ${style.textLink} ${style.actived}`}>Shipping Address</span>
							</div>
						</Link>

						<Link to="">
							<div className="d-flex align-items-center mb-4">
								<img src={iconOrder} alt="address" />
								<span className={`ms-2  ${style.textLink}`}>My Order</span>
							</div>
						</Link>
					</div>
				</aside>

				<div className={style.action}>
					<div className={style.formMenu}>
						<h5>Choose another address</h5>
						<p className={style.formTitle}>Manage your shipping address</p>
						<hr className="mb-5" />

						<div>
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
		</>
	);
}

export default Address;
