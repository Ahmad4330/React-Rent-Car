import React, { useCallback, useEffect, useState } from "react";
import "./Recmendation.css";
import RecmendationPro from "./RecmendationPro";

const Recmendation = () => {
  const [movies, setMovies] = useState([]);

  const moviesHandler = useCallback(async () => {
    const response = await fetch(
      "https://test-project-9723c-default-rtdb.firebaseio.com/PostAgain.json"
    );
    const data = await response.json();

    const loadedMovies = [];
    for (const key in data) {
      loadedMovies.push({
        heading1: data[key].heading1,
        heading2: data[key].heading2,
        detail1: data[key].detail1,
        detail2: data[key].detail2,
        detail3: data[key].detail3,
        price: data[key].price,
        day: data[key].day,
        discount: data[key].discount,
        button: data[key].button,
      });
    }
    setMovies(loadedMovies);
    console.log(movies)
  }, []);

  useEffect(() => {
    moviesHandler();
  }, [moviesHandler]);

  return (
    <>
      <section className="recmendation">
        <div className="container recmendation-container">
          <div className="recmendation-btns">
            <span className="third-heading2 recmend">Recomendation Car</span>
          </div>
          <div className="items">
            {/* {movies.slice(0,2).map((planed, i) => ( */}
            {movies.map((planed, i) => (
              <div className="main" key={i}>
                <RecmendationPro planed={planed}/>
              </div>
            ))}
          </div>
          <div className="recmended-btn">
            <button className="btns recmend-btn">Show more car</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recmendation;
