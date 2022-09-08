import React from "react";

// style
import style from "../../pages/my-bag/MyBag.module.css";

// icons
import { FiMinus, FiPlus } from "react-icons/fi";

function Counter() {
	const [counter, setCounter] = React.useState(1);
	return (
		<div className={style.counter}>
			<div
				className={`minus ${counter === 0 ? "counterDisable" : null}`}
				onClick={() => {
					if (counter > 0) {
						setCounter(counter - 1);
					}
				}}
			>
				<FiMinus />
			</div>
			<span>{counter}</span>
			<div
				className={`plus ${counter === 25 ? "counterDisable" : null}`}
				onClick={() => {
					if (counter >= 0 && counter < 25) {
						setCounter(counter + 1);
					}
				}}
			>
				<FiPlus />
			</div>
		</div>
	);
}

export default Counter;
