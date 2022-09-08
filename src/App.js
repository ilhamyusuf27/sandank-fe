import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reset from "./pages/reset/Reset";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Home from "./pages/home/Home";
import MyBag from "./pages/my-bag/MyBag";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
