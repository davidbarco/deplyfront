import React, { useState, useEffect } from "react";
import "../styles/Peliculas.css";
import { NavLink } from "react-router-dom";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  
  //cargar las peliculas al entrar al componente.
  useEffect(() => {
    fetch("https://deployback-production-018f.up.railway.app/api/movies", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    })
      .then((response) => response.json())
      .then((data) => setPeliculas(data.movies));
    
  }, []);


  return (
    <>
      <div
        className="peliculas"
        style={{}}
      >
        {peliculas.map((peliculas) => (
          <div
            key={peliculas.id}
            className="card"
            style={{
              width: "18rem",
              margin: "20px",
              boxShadow: "0px 0px 14px 3px #5d14a6a8",
            }}
          >
            <img
              src={`https://res.cloudinary.com/dcxg91rkw/image/upload/v1670168351/${peliculas.image}`}
              
              className="card-img-top"
              alt={peliculas.name}
              style={{ width: "100%", height: "350px" }}
            />
            <div className="card-body" style={{backgroundColor: "#270d46",color: "white"}}>
              <h5 className="card-title">{peliculas.name}</h5>
              <p className="card-text">{peliculas.descripcion}</p>
              <p className="card-text">{peliculas.año}</p>
              <div style={{ display: 'flex', justifyContent: 'space-around', width: "100%"}}>
              <NavLink to={`/pelicula/${peliculas.id}`} style={{ backgroundColor: "#e50914", color: "white", textDecoration: "none" }}>
              <button
                className="btn"
                style={{ backgroundColor: "#e50914", color: "white" }}
              >

                Ver
              </button>
              </NavLink>

              <NavLink to={`/pelicula-editar/${peliculas.id}`} style={{ backgroundColor: "#b0b014", color: "white", textDecoration: "none" }}>
              <button
                className="btn"
                style={{ backgroundColor: "#b0b014", color: "white"}}
              >

                Editar
              </button>
              </NavLink>

              </div>
             
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Peliculas;
