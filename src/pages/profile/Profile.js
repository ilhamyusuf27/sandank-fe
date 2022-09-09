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
import style from "./Profile.module.css";

// component
import InputProfile from "../../component/mollecule/InputProfile";
import RadioProfile from "../../component/mollecule/RadioProfile";
import DateInput from "../../component/mollecule/DateInput";

function Profile() {
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
								<span className={`ms-2 ${style.textLink} ${style.actived}`}>My Account</span>
							</div>
						</Link>

						<Link to="/profile/address">
							<div className="d-flex align-items-center mb-4">
								<img src={iconAddress} alt="address" />
								<span className={`ms-2  ${style.textLink}`}>Shipping Address</span>
							</div>
						</Link>

						<Link to="/profile/order">
							<div className="d-flex align-items-center mb-4">
								<img src={iconOrder} alt="address" />
								<span className={`ms-2  ${style.textLink}`}>My Order</span>
							</div>
						</Link>
					</div>
				</aside>

				<div className={style.action}>
					<div className={style.formMenu}>
						<h5>My Profile</h5>
						<p className={style.formTitle}>Manage your profile information</p>
						<hr className="mb-5" />

						<div>
							<div className="row">
								<div className="col-8 pe-4">
									<InputProfile type="text" placeholder="Johanes Mikael" title="Name" />
									<InputProfile type="email" placeholder="johanes@gmail.com" title="Email" />
									<InputProfile type="text" placeholder="08901289012" title="Phone number" />
									<RadioProfile />
									<DateInput />
								</div>
								<div className="col-4">
									<div className={style.upload}>
										<img src={profile} alt="profile" />
										<button type="button" className="btn btn-outline-primary btn-modal mt-3">
											Select Image
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
