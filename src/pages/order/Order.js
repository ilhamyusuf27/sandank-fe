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
import style from "./Order.module.css";

// components
import ButtonTabs from "../../component/atom/ButtonTabs";

function Order() {
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
								<span className={`ms-2  ${style.textLink} `}>Shipping Address</span>
							</div>
						</Link>

						<Link to="/profile/order">
							<div className="d-flex align-items-center mb-4">
								<img src={iconOrder} alt="address" />
								<span className={`ms-2  ${style.textLink} ${style.actived}`}>My Order</span>
							</div>
						</Link>
					</div>
				</aside>

				<div className={style.action}>
					<div className={style.formMenu}>
						<h5>My order</h5>

						<nav>
							<div className={`nav nav-tabs ${style.tabs}`} id="nav-tab" role="tablist">
								<ButtonTabs title="All items" id="nav-all-items-tab" target="nav-all-items" actived={true} />
								<ButtonTabs title="Not yet paid" id="nav-not-yet-tab" target="nav-not-yet" />
								<ButtonTabs title="Packed" id="nav-packed-tab" target="nav-packed" />
								<ButtonTabs title="Sent" id="nav-sent-tab" target="nav-sent" />
								<ButtonTabs title="Completed" id="nav-completed-tab" target="nav-completed" />
								<ButtonTabs title="Order cancel" id="nav-cancel-tab" target="nav-cancel" />
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

export default Order;
