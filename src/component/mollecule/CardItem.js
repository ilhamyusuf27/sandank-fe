import React from "react";
import { useNavigate } from "react-router-dom";

// images
import cardImage from "../../asset/images/jas.png";

// style
import style from "../../pages/home/Home.module.css";

// icons
import { BsFillStarFill } from "react-icons/bs";

function CardItem() {
	const navigate = useNavigate();
	return (
		<div className={style.itemCard} onClick={() => navigate("/detail")}>
			<div className="cardImage">
				<img src={cardImage} alt="cardImage" width={"100%"} height={"100%"} />
			</div>
			<div className={style.cardDesc}>
				<h6>Men's formal suit - Black & White</h6>
				<span>$ 40.0</span>
				<p className="text-secondary">Zalora Cloth</p>
				<div className={style.rating}>
					{[...new Array(5)].map(() => (
						<BsFillStarFill color="#FFBA49" />
					))}{" "}
					<p className="mb-0 mt-0 ms-1 text-secondary">(10)</p>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
