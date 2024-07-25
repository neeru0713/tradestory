import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SideNav from "./components/nav/SideNav";
import Trade from "./components/trade/Trade";
function App() {
  return (
    <BrowserRouter>
      <div className="App flex h-screen">
        <div className="w-[20%] h-full">
          <SideNav />
        </div>
        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trade" element={<Trade />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
