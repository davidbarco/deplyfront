import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Pelicula.css";

const Pelicula = () => {
  const [pelicula, setPelicula] = useState([]);

  //tomo el id de la pelicula de la url.
  let { id } = useParams();

  //cargar las peliculas al entrar al componente metodo get.
  useEffect(() => {
    fetch(`https://deployback-production-018f.up.railway.app/api/movie/${id}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => setPelicula(data.movie));
  }, [id]);
  //console.log(pelicula);
  return (
    <>
      <div
        className="peliculas"
        style={{}}
      >
        {pelicula.map((pelicula) => (
          <div
            key={pelicula.id}
            className="card"
            style={{}}
          >
            <video width="100%" height="100%" controls poster={`https://res.cloudinary.com/dcxg91rkw/image/upload/v1670168351/${pelicula.image}`}>
              <source
                src={`https://res.cloudinary.com/dcxg91rkw/video/upload/v1670168736/${pelicula.video}`}
              />
            </video>

            <div
              className="card-body"
              style={{ backgroundColor: "#270d46", color: "white" }}
            >
              <h5 className="card-title">{pelicula.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pelicula;
