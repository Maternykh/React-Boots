import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Report from "./pages/Report";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import AddProductPage from "./pages/AddProductPage";
const App: React.FC = () => {
  return (
    <div className=" bg-gray-900 min-h-screen p-4">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/reviews" element={<Report />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/addproduct" element={<AddProductPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
