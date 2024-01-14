import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trailer from "./component/Trailer";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";
import LoginPage from "./component/LoginPage";
import Navbar from "./component/Navbar";
import { MovieProvider } from "./context/MovieCont";
import Explore from "./component/Explore";

function App() {
  return (
    <>
      <div className="bg-black">
        <MovieProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/home" exact element={<HomePage />} />
              <Route path="/movie/:id/:name" exact element={<Trailer />} />
              <Route path="/in/explore" exact element={<Explore />} />
            </Routes>
            <Footer />
          </Router>
        </MovieProvider>
      </div>
    </>
  );
}

export default App;
