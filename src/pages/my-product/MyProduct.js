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
import style from "./MyProduct.module.css";

// components
import ButtonTabs from "../../component/atom/ButtonTabs";

function MyProduct() {
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
							<span className={`ms-2 ${style.textLink} `}>Store</span>
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
									<span className={`${style.textCollapse} ${style.textLink} ${style.actived}`}>My product</span>
								</Link>
								<Link to="/profile-seller/selling-product">
									<span className={`${style.textCollapse} ${style.textLink}`}>Selling product</span>
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
					<div className={style.formMenu}>
						<h5>My product</h5>

						<nav>
							<div className={`nav nav-tabs ${style.tabs}`} id="nav-tab" role="tablist">
								<ButtonTabs title="All items" id="nav-all-items-tab" target="nav-all-items" actived={true} />
								<ButtonTabs title="Sold out" id="nav-sold-out-tab" target="nav-sold-out" />
								<ButtonTabs title="Archived" id="nav-archived-tab" target="nav-archived" />
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyProduct;
