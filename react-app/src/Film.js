import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Events } from "./pages";


let filmData = ['data'];
let filmName = {};

function FilmDetails(props) {
  console.log(props.data);
  if(props.data) {
    return (
      <div>
    <ul>
      {props.data.map(dt => <li key = {dt.id}><button onClick={() => handleClick(dt.slugLine)}>{dt.name}</button></li>)}
    </ul>
    </div>
    )
  }
 
  function handleClick(slug) {

    let dat = fetch("http://localhost:8080/films/"+ slug)
    .then((response) => response.json());
    return dat;
   console.log(dat);
    
  }
  return <h1>Click Me!</h1>;
}

function Film() {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8080/films")
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
    }, []);

  return (
   <FilmDetails data={data}/>
  );
}

export default Film;
