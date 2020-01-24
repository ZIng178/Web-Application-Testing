import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [Strike, setStrike] = useState(0);
  const [Ball, setBall] = useState(0);

  const addStrikes = () => {
    if (Strike >= 3) {
      setStrike(0);
      setBall(0);
    } else {
      setStrike(Strike + 1);
    }
  };

   
   const addBalls = () =>{
     if(Ball >=3){
       setBall(0);
       setStrike(0);
     } else {
       setBall(Ball +1)
     }
   }

   const addHit=() =>{
     setStrike(0)
     setBall(0)
   };

   

   

  return (
    <div className="App">
      <header className="header">
        <h1> Baseball Score Tracker</h1>
      </header>
      <Dashboard addStrikes={addStrikes} setStrike={setStrike}
      addBalls={addBalls}
      setBall={setBall} />
      <Display 
      Strike={Strike}
       Ball={Ball} />
    </div>
  );
}

export default App;
