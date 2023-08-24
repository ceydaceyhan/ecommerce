import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import LogIn from "./pages/LogIn";
import Basket from "./pages/Basket";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
