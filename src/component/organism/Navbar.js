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
							<h5 className="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">...</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
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
