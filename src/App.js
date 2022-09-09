import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./pages/reset/Reset";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Index from "./pages/home/Index";
import Home from "./pages/home/Home";
import MyBag from "./pages/my-bag/MyBag";
import Category from "./pages/category/Category";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import Address from "./pages/address/Address";
import Order from "./pages/order/Order";
import Detail from "./pages/detail/Detail";
import ProfileSeller from "./pages/profile-seller/ProfileSeller";
import MyProduct from "./pages/my-product/MyProduct";
import MyOrder from "./pages/my-order/MyOrder";
import SellerProduct from "./pages/seller-product/SellerProduct";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"}>
					<Route index element={<Index />} />
					<Route path={"/home"} element={<Home />} />
					<Route path={"/login"} element={<Login />} />
					<Route path={"/register"} element={<Register />} />
					<Route path={"/reset"} element={<Reset />} />
					<Route path={"/reset-password"} element={<ResetPassword />} />
					<Route path={"/my-bag"} element={<MyBag />} />
					<Route path={"/checkout"} element={<Checkout />} />
					<Route path={"/category"} element={<Category />} />
					<Route path={"/profile"} element={<Profile />} />
					<Route path={"/profile/address"} element={<Address />} />
					<Route path={"/profile/order"} element={<Order />} />
					<Route path={"/detail"} element={<Detail />} />
					<Route path={"/profile-seller"} element={<ProfileSeller />} />
					<Route path={"/profile-seller/my-product"} element={<MyProduct />} />
					<Route path={"/profile-seller/my-order"} element={<MyOrder />} />
					<Route path={"/profile-seller/selling-product"} element={<SellerProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
