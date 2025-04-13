import { Route, Routes } from "react-router";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer />
    </>
  )
}