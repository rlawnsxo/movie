import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./movie/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `
        https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>Tegh coins!</h1>
      {loading ? (
        <strong>loading....</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   if (!toDo) {
  //     return;
  //   }
  //   setToDo("");
  //   setToDos((currentArray) => [toDo, ...currentArray]);
  // };
  // console.log(toDos);
  // return (
  //   <div className="App">
  //     <h1>My To Dos ({toDos.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         onChange={onChange}
  //         type="text"
  //         value={toDo}
  //         placeholder="Write your to do....."
  //       />
  //       <button>Add To Do</button>
  //     </form>
  //     <hr />
  //     <ul>
  //       {toDos.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
