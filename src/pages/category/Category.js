/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TitlePage from "../../component/atom/TitlePage";
import Breadcrumb from "../../component/mollecule/Breadcrumb";
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
				<Breadcrumb current="T-shirt" />

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
