import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";

const AppRoutes = () => {
  return (
    <>
      {/* 2 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
