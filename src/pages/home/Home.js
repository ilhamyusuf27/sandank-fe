import React from "react";
import MainLayout from "../../layout/MainLayout";

// images
import Slider1 from "../../asset/images/slider1.png";

// React Slick
import Slider from "react-slick";

// style
import style from "./Home.module.css";

// Component
import NextButton from "../../component/atom/NextButton";
import PreviousButton from "../../component/atom/PreviousButton";
import PreviousButtonCategory from "../../component/atom/PreviousButtonCategory";
import NextButtonCategory from "../../component/atom/NextButtonCategory";
import CardItem from "../../component/mollecule/CardItem";
import Title from "../../component/atom/Title";

function Home() {
	const settings = {
		dots: true,
		infinite: true,
		centerMode: true,
		centerPadding: "20%",
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		initialSlide: 0,
		nextArrow: <NextButton />,
		prevArrow: <PreviousButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const category = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3.8,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <PreviousButtonCategory />,
		nextArrow: <NextButtonCategory />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<>
			<MainLayout>
				<section className={style.sectionContainer}>
					{/* Slider */}
					<div className="container">
						<div className={`mb-5 ${style.trend}`}>
							<Slider {...settings}>
								{[...new Array(5)].map(() => (
									<div className={style.cardSlide}>
										<div className={style.cardContent}>
											<h5>Trends in 2020</h5>
											<img src={Slider1} width="100%" height="100%" alt="slider" />
										</div>
									</div>
								))}
							</Slider>
						</div>
					</div>

					{/* Category */}
					<div className={style.category}>
						<div className="container">
							<div className="row">
								<div className="col-3">
									<h3>Category</h3>
									<p className="text-secondary">What are you currently looking for</p>
								</div>
								<div className="col-9">
									<div className={style.categorySlider}>
										<Slider {...category}>
											{[...new Array(6)].map(() => (
												<div className={style.cardCategory}>
													<div className={style.cardCategoryContent}></div>
												</div>
											))}
										</Slider>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						{/* New Product */}
						<div className={style.itemContainer}>
							<Title title="New" desc="You’ve never seen it before!" />
							<div className={style.itemContent}>
								{[...new Array(15)].map(() => (
									<CardItem />
								))}
							</div>
						</div>

						{/* Popular */}
						<div className={style.itemContainer}>
							<Title title="Popular" desc="Find clothes that are trending recently" />
							<div className={style.itemContent}>
								{[...new Array(15)].map(() => (
									<CardItem />
								))}
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</>
	);
}

export default Home;
