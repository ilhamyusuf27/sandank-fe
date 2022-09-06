import React from "react";
import { Link } from "react-router-dom";
import Logo from "../mollecule/Logo";

// css
import style from "./style/navbar.module.css";

// icon
import { BsSearch, BsFunnel } from "react-icons/bs";
import { FiShoppingCart, FiBell, FiMail, FiUser } from "react-icons/fi";

function Navbar() {
	return (
		<>
			<nav className={`navbar bg-white ${style.navbarContainer}`}>
				<div className="container">
					<div className="containerLogo">
						<Link to="/" className="link">
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
						<FiShoppingCart size={20} color="#8E8E93" />
						<FiBell size={20} color="#8E8E93" />
						<FiMail size={20} color="#8E8E93" />
						<FiUser size={20} color="#8E8E93" />
					</div>
				</div>
			</nav>

			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
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
							</div>
							<div className="modal-body">
								<h6>Sizes</h6>
								<div className={`d-flex flex-wrap ${style.checkContainer} mt-3`}>
									<div>
										<input type="checkbox" class="btn-check" id="xs" autocomplete="off" />
										<label class="btn btn-outline-primary" for="xs">
											XS
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="s" autocomplete="off" />
										<label class="btn btn-outline-primary" for="s">
											S
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="m" autocomplete="off" />
										<label class="btn btn-outline-primary" for="m">
											M
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="l" autocomplete="off" />
										<label class="btn btn-outline-primary" for="l">
											L
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="xl" autocomplete="off" />
										<label class="btn btn-outline-primary" for="xl">
											XL
										</label>
									</div>
								</div>
							</div>
							<div className="modal-body">
								<h6>Category</h6>
								<div className={`d-flex flex-wrap ${style.checkContainer} mt-3`}>
									<div>
										<input type="checkbox" class="btn-check" id="all" autocomplete="off" />
										<label class="btn btn-outline-primary" for="all">
											ALL
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="women" autocomplete="off" />
										<label class="btn btn-outline-primary" for="women">
											Women
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="men" autocomplete="off" />
										<label class="btn btn-outline-primary" for="men">
											Men
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="boys" autocomplete="off" />
										<label class="btn btn-outline-primary" for="boys">
											Boys
										</label>
									</div>
									<div>
										<input type="checkbox" class="btn-check" id="girls" autocomplete="off" />
										<label class="btn btn-outline-primary" for="girls">
											Girls
										</label>
									</div>
								</div>
							</div>
							<div className="modal-body">
								<h6>Brand</h6>
								<h6>Nanti pakai collapse</h6>
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
