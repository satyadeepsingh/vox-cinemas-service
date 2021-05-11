import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Events } from "./pages";


function Header(props) {
  return (
    <header>
      <h1>{props.name} Cinemas</h1>
    </header>
  )
}


function Main() {
  return (
    <header>
      <h2>Cinematic experience</h2>
    </header>
  )
}

function State(props) {
  console.log(props);
  if(props.loading) return <h1>Loading....</h1>;
  // if(!props.loading && props.error) return <pre>{ JSON.stringify(error, null, 2)}</pre>;

    if(props.data && props.data != '' && ! props.loading) {
      return <div>
        <h3>
          <ul> 
            {props.data.map((data) => <li key={data.name} >{data.slugLine}
            </li>)} 
          </ul>
          
        </h3>
      </div>
    }
  return <h3>No Data found</h3>;
}
 

// function handleClick(film) {
//   var slug = film.slugLine;
  
//   // var socket = new WebSocket('ws://localhost:8080/ws/films');

//   // socket.addEventListener('message', function (event) {
//   //   window.alert('message from server: ' + event.data);
//   //   console.log('message from server: ' + event.data);
//   //    document.querySelector(".events").innerHTML += event.data + "<br>";
//   // });
//   console.log("Loaded message from server");
//   fetch("http://localhost:8080/films/" + slug)
//   .then((response) => response.json())
//   .then((data) => {
//   res = data[0];
//   console.log(res);
//   filmName = res.name;
//   }).catch(error => JSON.stringify(error, null, 2));

//   console.log(filmName);
// }

function Footer(props) {
  return (
    <header>
      <h3>Copyright.{props.month} {props.year}</h3>
    </header>
  )
}

function App() {

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
    
    <div>
       <Routes>
        <Route path="/events" element={ <Events />} />
        
      </Routes>

      <Header name="VOX" />
      <Main />
     
      <State data={data} loading={loading} />
      
      <Footer month={new Date().getMonth()} year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
