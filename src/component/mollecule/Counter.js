import React from "react";

// style
import style from "../../pages/my-bag/MyBag.module.css";

// icons
import { FiMinus, FiPlus } from "react-icons/fi";

function Counter(props) {
	const { min, max } = props;

	const [counter, setCounter] = React.useState(min);
	return (
		<div className={style.counter}>
			<div
				className={`minus ${counter === min ? "counterDisable" : null}`}
				onClick={() => {
					if (counter > min) {
						setCounter(counter - 1);
					}
				}}
			>
				<FiMinus size={20} />
			</div>
			<span>{counter}</span>
			<div
				className={`plus ${counter === max ? "counterDisable" : null}`}
				onClick={() => {
					if (counter >= 0 && counter < max) {
						setCounter(counter + 1);
					}
				}}
			>
				<FiPlus size={20} />
			</div>
		</div>
	);
}

export default Counter;
