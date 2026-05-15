import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Story from "../pages/story";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Venue from "../pages/Venue";
import useScrollToTop from "../hooks/useScrollToTop";

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/venue" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
