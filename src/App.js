import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
