import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
