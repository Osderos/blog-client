import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PostDetailed from "./components/PostDetailed";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostDetailed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
