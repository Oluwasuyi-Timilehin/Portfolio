import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const Routing = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // It enables startTransition for React
        v7_relativeSplatPath: true, // It enables relative splat paths
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;