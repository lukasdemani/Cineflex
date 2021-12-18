import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/MoviesPage";
import Schedule from "./components/Schedule";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/horarios/:idMovie" element={<Schedule />}></Route>
      </Routes>
    </BrowserRouter>
  );
}