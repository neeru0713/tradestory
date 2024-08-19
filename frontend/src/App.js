import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SideNav from "./components/nav/SideNav";
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
          <Notification/>
          <Spinner />
        </div>
        <div className="App flex h-screen">
          <div className="w-[15%] h-full">
            <SideNav />
          </div>
          <div className="w-[85%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trade" element={<Trade />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
