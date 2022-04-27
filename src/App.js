import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Movie from "./movie/Main/Movie";
import MovieDetail from "./movie/Detail/MovieDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/detail" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
