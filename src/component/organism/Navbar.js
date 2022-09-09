import React from "react";
import { Link } from "react-router-dom";
import Logo from "../mollecule/Logo";

// css
import style from "./style/navbar.module.css";

// icon
import { BsSearch, BsFunnel } from "react-icons/bs";
import { FiShoppingCart, FiBell, FiMail, FiUser, FiChevronDown } from "react-icons/fi";

function Navbar() {
	return (
		<>
			<nav className={`navbar bg-white ${style.navbarContainer}`}>
				<div className="container">
					<div className="containerLogo">
						<Link to="/home" className="link">
							<Logo />
						</Link>
					</div>
					<div className={`d-flex ${style.containerSearch}`}>
						<div className={style.searchBar}>
							<input type="text" className={style.search} placeholder="Search" />
							<BsSearch color="#DADADA" />
						</div>

						<button className={style.buttonFilter} data-bs-toggle="modal" data-bs-target="#exampleModal">
							<BsFunnel color="#8E8E93" />
						</button>
					</div>
					<div className={style.iconContainer}>
						<Link to="/my-bag">
							<FiShoppingCart size={20} color="#8E8E93" />
						</Link>
						<Link to="/home">
							<FiBell size={20} color="#8E8E93" />
						</Link>
						<Link to="/home">
							<FiMail size={20} color="#8E8E93" />
						</Link>
						<Link to="/profile">
							<FiUser size={20} color="#8E8E93" />
						</Link>
					</div>
				</div>
			</nav>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className={style.btnModalClose} data-bs-dismiss="modal" aria-label="Close" />
							<h5 className="modal-title" id="exampleModalLabel">
								Filter
							</h5>
						</div>
						<form>
							<div className="modal-body">
								<h6>Colors</h6>
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
							</div>
							<div className="modal-body">
								<h6>Sizes</h6>
								<div className={`d-flex flex-wrap ${style.checkContainer} mt-4`}>
									<div>
										<input type="checkbox" className="btn-check" id="xs" autocomplete="off" />
										<label className="btn btn-outline-primary" for="xs">
											XS
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="s" autocomplete="off" />
										<label className="btn btn-outline-primary" for="s">
											S
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="m" autocomplete="off" />
										<label className="btn btn-outline-primary" for="m">
											M
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="l" autocomplete="off" />
										<label className="btn btn-outline-primary" for="l">
											L
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="xl" autocomplete="off" />
										<label className="btn btn-outline-primary" for="xl">
											XL
										</label>
									</div>
								</div>
							</div>
							<div className="modal-body">
								<h6>Category</h6>
								<div className={`d-flex flex-wrap ${style.checkContainer} mt-4`}>
									<div>
										<input type="checkbox" className="btn-check" id="all" autocomplete="off" />
										<label className="btn btn-outline-primary" for="all">
											ALL
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="women" autocomplete="off" />
										<label className="btn btn-outline-primary" for="women">
											Women
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="men" autocomplete="off" />
										<label className="btn btn-outline-primary" for="men">
											Men
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="boys" autocomplete="off" />
										<label className="btn btn-outline-primary" for="boys">
											Boys
										</label>
									</div>
									<div>
										<input type="checkbox" className="btn-check" id="girls" autocomplete="off" />
										<label className="btn btn-outline-primary" for="girls">
											Girls
										</label>
									</div>
								</div>
							</div>
							<div className="modal-body">
								<div className="row" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
									<div className="col-10">
										<h6>Brand</h6>
										<p>adidas Originals, Jack & Jones, s.Oliver</p>
									</div>
									<div className="col-2 d-flex align-items-center">
										<FiChevronDown size={25} />
									</div>
								</div>
								<div className="collapse" id="collapseExample">
									<div className="">
										<div className="row">
											<div className="col-4">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
													<label className="form-check-label" for="flexCheckDefault">
														Adidas Originals
													</label>
												</div>
											</div>
											<div className="col-4">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
													<label className="form-check-label" for="flexCheckDefault">
														Jack & Jones
													</label>
												</div>
											</div>
											<div className="col-4">
												<div className="form-check">
													<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
													<label className="form-check-label" for="flexCheckDefault">
														s.Oliver
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-primary btn-modal" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary btn-modal">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
