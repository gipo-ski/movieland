// import logo from './logo.svg';
import {useState} from 'react';
import Person from "./Person";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <>
      <Person name={"John"} surname={"Doe"} age={30} />
      <div className="App">
        <button onClick={() => { setCounter((prevCount) => prevCount - 1); }}>-</button>
        <h1>{counter}</h1>
        <button onClick= {() => {setCounter((prevCount) => prevCount + 1);}} >+</button>
      </div>
    </>
  );
};

export default App;
