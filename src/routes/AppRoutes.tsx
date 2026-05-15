import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Story from "../pages/story";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Venue from "../pages/Venue";
import RSVP from "../pages/RSVP";
import Invite from "../pages/Invite";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
