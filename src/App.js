import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/MoviesPage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}