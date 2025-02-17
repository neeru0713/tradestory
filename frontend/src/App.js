import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Strategy from "./components/strategy/Strategy";
import StrategyInfo from "./components/strategy/StrategyInfo";
import SideNav from "./components/nav/SideNav";
import Pricing from "./components/pricing/Pricing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import Payment from "./components/payment/payment";
import { Spinner } from "./components/utils/spinner/Spinner";
import { Notification } from "./components/utils/notification/Notification";
import Trade from "./components/trade/Trade";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app-wrapper">
          <Notification />
          <Spinner />
        </div>
        <div className="App flex h-screen">
          <div className="w-[15%] h-full">
            <SideNav />
          </div>
          <div className="w-[85%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/success" element={<Payment />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/strategy/:name" element={<StrategyInfo />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
