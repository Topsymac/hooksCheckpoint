import "./App.css";
import MovieDescription from "./Pages/MovieDescription";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes Routes>
        <Route exact path="/" element={<HomePage />} />{" "}
        <Route path="/movie-description" element={<MovieDescription />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
