import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Header from './component/header/Header';
import Home from './pages/home-page/Home';
import MovieList from './component/MovieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">

        <Router>

{/* ham vo header wale sabhi link ko yah put kr denge*/}
          <Header />

      <Routes>
        <Route index element={<Home />}></Route>
//agar yha koi bhi MOVIE KE BAD ID ka path dega to movie wale ko show karega 
        <Route path="movie/:id" element={<Movie />}></Route>
//agar yha koi bhi MOVIE KE BAD type ka path dega to movie wale ko show karega 
        <Route path="movies/:type" element={<MovieList />}></Route>
        
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>

        </Router>

    </div>
  );
}

export default App;
