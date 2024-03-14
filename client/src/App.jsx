import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "./components/ForgotPass/ForgotPassword";
import EnterOtp from "./components/EnterOTP/EnterOtp";
// import HomePage from "./pages/HomePage/HomePage";
import { lazy, Suspense } from "react";
import Checkout from "./pages/Checkout/Checkout";
const LazyHomePage = lazy(() => import("./pages/HomePage/HomePage"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/otp" element={<EnterOtp />} />
          <Route
            path="/home"
            element={
              <Suspense>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
