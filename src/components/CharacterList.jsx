import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p><strong>Page: {props.page}</strong></p>
      <div>
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={() => props.setpage(props.page - 1)}
        >
          Page {props.page - 1}
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.setpage(props.page + 1)}
        >
          Page {props.page + 1}
        </button>
      </div>
    </header>
  );
}

function CharacterList() {
  const [characters, setcharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setcharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setpage={setpage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setpage={setpage} />
    </div>
  );
}

export default CharacterList;
