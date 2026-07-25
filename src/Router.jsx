import { Route, Routes } from "react-router-dom";
import PageTransition from "./components/PageTransition/index.jsx";

// Pages
import Home from "./pages/Home/index.jsx";
import Presentes from "./pages/Presentes/index.jsx";
import DataLocal from "./pages/DataLocal/index.jsx";

export default function Router() {
  return (
    <>
      <PageTransition>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/presentes" element={<Presentes />}></Route>
          <Route path="/data-e-local" element={<DataLocal />}></Route>
        </Routes>
      </PageTransition>
    </>
  );
}