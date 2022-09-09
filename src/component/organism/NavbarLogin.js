import React from "react";
import { Link } from "react-router-dom";
import Logo from "../mollecule/Logo";

// css
import style from "./style/navbar.module.css";

// icon
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

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
					</div>
					<div className={style.iconContainerLogin}>
						<Link to="/my-bag">
							<FiShoppingCart size={20} color="#8E8E93" />
						</Link>
						<div className={style.buttonLogin}>
							<Link to="/login">
								<button type="button" className={`btn btn-primary btn-modal ${style.buttonAuth}`}>
									Login
								</button>
							</Link>
							<Link to="/register">
								<button type="button" className={`btn btn-outline-primary btn-modal ${style.buttonAuth}`} data-bs-dismiss="modal">
									Register
								</button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
