import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import style from "../../pages/detail/Detail.module.css";

function RatingLine(props) {
	const { rating, total, line } = props;
	return (
		<div className={style.ratingContainer}>
			<div className="d-flex align-items-center">
				<BsFillStarFill color="#FFBA49" />
				<span className={`${style.textSecondary} ms-2`}>{rating}</span>
			</div>
			{line ? <hr className={style.line} /> : null}
			<span className={`${style.textSecondary}`}>{total}</span>
		</div>
	);
}

export default RatingLine;
