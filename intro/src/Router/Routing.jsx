import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const Routing = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // Enables startTransition for React 18
        v7_relativeSplatPath: true, // Enables relative splat paths
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;