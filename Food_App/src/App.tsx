import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import DishesSection from "./components/DishesSection";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home searchQuery={searchQuery} />} />
        <Route path="/dishes" element={<DishesSection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
