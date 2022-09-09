import React from "react";
import Breadcrumb from "../../component/mollecule/Breadcrumb";
import MainLayout from "../../layout/MainLayout";

import style from "./Detail.module.css";

// icon
import { BsFillStarFill } from "react-icons/bs";

// image
import produk1 from "../../asset/images/produk1.png";
import produk2 from "../../asset/images/produk2.png";
import produk3 from "../../asset/images/produk3.png";
import produk4 from "../../asset/images/produk4.png";
import produk5 from "../../asset/images/produk5.png";

// components
import Counter from "../../component/mollecule/Counter";
import Color from "../../component/mollecule/Color";
import RatingLine from "../../component/mollecule/RatingLine";
import CardItem from "../../component/mollecule/CardItem";
import Title from "../../component/atom/Title";

function Detail() {
	const [mainPhoto, setMainPhoto] = React.useState(produk1);
	return (
		<>
			<MainLayout />

			<section className={style.detail}>
				<div className="main">
					<div className="container">
						<Breadcrumb current="T-shirt" />

						<div className={style.content}>
							<div className={style.produk}>
								<div className="row">
									<div className="col-4">
										<img src={mainPhoto} alt="baju" width="100%" height="auto" className={style.imageProduct} />
										<div className={style.galery}>
											<img src={produk1} alt="baju" width="70px" height="auto" className={style.imageProduct} onClick={() => setMainPhoto(produk1)} />
											<img src={produk2} alt="baju" width="70px" height="auto" className={style.imageProduct} onClick={() => setMainPhoto(produk2)} />
											<img src={produk3} alt="baju" width="70px" height="auto" className={style.imageProduct} onClick={() => setMainPhoto(produk3)} />
											<img src={produk4} alt="baju" width="70px" height="auto" className={style.imageProduct} onClick={() => setMainPhoto(produk4)} />
											<img src={produk5} alt="baju" width="70px" height="auto" className={style.imageProduct} onClick={() => setMainPhoto(produk5)} />
										</div>
									</div>

									<div className="col-8">
										<div className={style.title}>
											<h3 className="mb-0">Baju muslim pria</h3>
											<span className={`${style.store} ${style.textSecondary}`}>Zalora cloth</span>
										</div>

										<div className={style.rating}>
											{[...new Array(5)].map(() => (
												<BsFillStarFill color="#FFBA49" />
											))}{" "}
											<p className={`mb-0 mt-0 ms-1 ${style.textSecondary}`}>(10)</p>
										</div>

										<div className={style.price}>
											<span className={`${style.textSecondary} ${style.priceTitle}`}>Price</span>
											<h3>$ 20.0</h3>
										</div>

										<div className={style.color}>
											<h6>Color</h6>
											<Color />
										</div>

										<div className={style.add}>
											<div>
												<h6>Size</h6>
												<Counter min={28} max={35} />
											</div>
											<div className="ms-5">
												<h6>Jumlah</h6>
												<Counter min={1} max={25} />
											</div>
										</div>

										<div className={style.action}>
											<div className="row">
												<div className="col-6">
													<div className="row">
														<div className="col-6">
															<button type="button" className="btn btn-outline-primary btn-modal w-100">
																Chat
															</button>
														</div>
														<div className="col-6">
															<button type="button" className="btn btn-outline-primary btn-modal w-100">
																Add bag
															</button>
														</div>
													</div>
												</div>
												<div className="col-6">
													<button type="button" className="btn btn-primary btn-modal w-75">
														Buy now
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className={style.info}>
								<h3 className={style.sectionTitle}>Informasi Produk</h3>

								<div className={style.infoDetail}>
									<h5 className={style.titleInfo}>Condition</h5>
									<span className={style.conditionDesc}>New</span>
								</div>
								<div className={style.infoDetail}>
									<h5 className={style.titleInfo}>Description</h5>
									<p className={style.textDesc}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										<br />
										<br />
										Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
										Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam
										commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
										<br />
										<br />
										Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus.
										Praesent sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus. Mauris vel molestie orci.
									</p>
								</div>
							</div>

							<div className="Product review">
								<h3 className={style.sectionTitle}>Product Review</h3>

								<div className="d-flex">
									<div className={style.ratingProduct}>
										<div className={style.productRating}>
											<span className={style.mainRating}>5.0</span>
											<span className={style.allRating}>/10</span>
										</div>
										<div className="d-flex justify-content-evenly">
											{[...new Array(5)].map(() => (
												<BsFillStarFill size={20} color="#FFBA49" />
											))}
										</div>
									</div>

									<div className="ms-5">
										<RatingLine rating={5} total={4} line={true} />
										<RatingLine rating={4} total={0} line={false} />
										<RatingLine rating={3} total={0} line={false} />
										<RatingLine rating={2} total={0} line={false} />
										<RatingLine rating={1} total={0} line={false} />
									</div>
								</div>
							</div>
						</div>

						<hr className={style.separator} />

						<div className={style.recomendation}>
							<h2 className={style.recomenTitle}>You can also like this</h2>
							<span className={style.recomenDesc}>You’ve never seen it before!</span>
							<div className={style.itemContent}>
								{[...new Array(10)].map(() => (
									<CardItem />
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Detail;
