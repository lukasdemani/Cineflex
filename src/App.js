import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./components/MoviesPage";
console.log('app')

export default function App() {
    console.log('app2')
  return (
    // <MoviesPage/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}