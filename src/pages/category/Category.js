/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../../component/atom/TitlePage";
import CardItem from "../../component/mollecule/CardItem";
import MainLayout from "../../layout/MainLayout";

// style
import style from "./Category.module.css";

function Category() {
	return (
		<div className="main">
			<MainLayout />
			<div className="container">
				{/* Breadceumb */}
				<nav className="mainBreadcrumb" aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/" passHref>
								<a>Home</a>
							</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Category
						</li>
					</ol>
				</nav>

				<TitlePage title="T-Shirt" />
				<div className={style.itemContent}>
					{[...new Array(15)].map(() => (
						<CardItem />
					))}
				</div>
			</div>
		</div>
	);
}

export default Category;
