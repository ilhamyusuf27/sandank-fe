import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./pages/reset/Reset";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Home from "./pages/home/Home";
import MyBag from "./pages/my-bag/MyBag";
import Category from "./pages/category/Category";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import Address from "./pages/address/Address";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"}>
					<Route index element={<Home />} />
					<Route path={"/login"} element={<Login />} />
					<Route path={"/register"} element={<Register />} />
					<Route path={"/reset"} element={<Reset />} />
					<Route path={"/reset-password"} element={<ResetPassword />} />
					<Route path={"/my-bag"} element={<MyBag />} />
					<Route path={"/checkout"} element={<Checkout />} />
					<Route path={"/category"} element={<Category />} />
					<Route path={"/profile"} element={<Profile />} />
					<Route path={"/profile/address"} element={<Address />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
