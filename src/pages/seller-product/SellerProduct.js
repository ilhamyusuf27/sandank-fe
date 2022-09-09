import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";

// image
import iconAccount from "../../asset/images/iconAccount.png";
import iconAddress from "../../asset/images/iconAddress.png";
import iconOrder from "../../asset/images/iconOrder.png";
import profile from "../../asset/images/profile.png";
import imageUpload from "../../asset/images/imageUpload.png";

// icon
import { RiPencilFill } from "react-icons/ri";

// style
import style from "./SellerProduct.module.css";

// component
import InputSeller from "../../component/mollecule/InputSeller";
import RadioSeller from "../../component/mollecule/RadioSeller";
function SellerProduct() {
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

						<div className="d-flex align-items-center" data-bs-toggle="collapse" href="#collapseStore" role="button" aria-expanded="false" aria-controls="collapseStore">
							<img src={iconAccount} alt="akun" />
							<span className={`ms-2 ${style.textLink}`}>Store</span>
						</div>

						<div class="collapse mt-3" id="collapseStore">
							<Link to="/profile-seller">
								<span className={`${style.textCollapse} ${style.textLink} `}>Store Profile</span>
							</Link>
						</div>

						<div className="d-flex align-items-center mt-4" data-bs-toggle="collapse" href="#collapseProduct" role="button" aria-expanded="false" aria-controls="collapseProduct">
							<img src={iconAddress} alt="address" />
							<span className={`ms-2  ${style.textLink} ${style.actived}`}>Product</span>
						</div>

						<div class="collapse mt-3" id="collapseProduct">
							<div className="d-flex flex-column">
								<Link to="/profile-seller/my-product" className="mb-3">
									<span className={`${style.textCollapse} ${style.textLink}`}>My product</span>
								</Link>
								<Link to="/profile-seller/selling-product">
									<span className={`${style.textCollapse} ${style.textLink} ${style.actived}`}>Selling product</span>
								</Link>
							</div>
						</div>

						<div className="d-flex align-items-center mt-4" data-bs-toggle="collapse" href="#collapseOrder" role="button" aria-expanded="false" aria-controls="collapseOrder">
							<img src={iconOrder} alt="address" />
							<span className={`ms-2  ${style.textLink}`}>Order</span>
						</div>

						<div class="collapse mt-3" id="collapseOrder">
							<div className="d-flex flex-column">
								<Link to="/profile-seller/my-order" className="mb-3">
									<span className={`${style.textCollapse} ${style.textLink}`}>My order</span>
								</Link>
							</div>
						</div>
					</div>
				</aside>

				<div className={style.action}>
					{/* Inventory */}
					<div className={style.formMenu}>
						<h5>Inventory</h5>
						<hr className="mb-5" />
						<div>
							<div className="row">
								<div className="col-6 pe-4">
									<InputSeller type="text" placeholder="" title="Name of goods" />
									{/* <div className="row">
										<div className="col-3 d-flex justify-content-end">
											<p className={style.inputTitle}>Description</p>
										</div>
										<div className="col-9">
											<textarea className="input text-area" rows={5} />
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>

					{/* Item details */}
					<div className={style.formMenu}>
						<h5>Item details</h5>
						<hr className="mb-5" />
						<div>
							<div className="row">
								<div className="col-6 pe-4">
									<InputSeller type="text" placeholder="" title="Unit price" />
									<InputSeller type="text" placeholder="" title="Stock" />
									<RadioSeller />
									{/* <div className="row">
										<div className="col-3 d-flex justify-content-end">
											<p className={style.inputTitle}>Description</p>
										</div>
										<div className="col-9">
											<textarea className="input text-area" rows={5} />
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>

					{/* Photo of goods */}
					<div className={style.formMenu}>
						<h5>Item details</h5>
						<hr className="mb-5" />
						<div className={style.uploadContainer}>
							<div className="d-flex justify-content-evenly mt-5">
								<img src={imageUpload} width="120px" height="120px" alt="gambar" />
								<img src={imageUpload} width="120px" height="120px" alt="gambar" />
								<img src={imageUpload} width="120px" height="120px" alt="gambar" />
								<img src={imageUpload} width="120px" height="120px" alt="gambar" />
								<img src={imageUpload} width="120px" height="120px" alt="gambar" />
							</div>
							<hr className="mx-4 mt-5" />
							<div className="text-center">
								<button type="button" className="btn btn-outline-primary btn-modal" data-bs-dismiss="modal">
									Upload foto
								</button>
							</div>
						</div>
					</div>

					{/* Description */}
					<div className={style.formMenu}>
						<h5>Description</h5>
						<hr className="mb-5" />
						<div>
							<textarea className="input text-area" rows={5} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SellerProduct;
