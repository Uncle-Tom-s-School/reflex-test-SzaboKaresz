import { useEffect, useState } from "react";


function randomSzam() {
  return Math.floor(Math.random() * 10);
}

const App = () => {
  const [szam, setSzam] = useState(0);
  const [waiting, setWaiting] = useState(false); 
  const [ready, setReady] = useState(false);

  function visszaSzamlalo(szam: number) {
    while (szam > 0) {
      setSzam(prev => prev - 1);
      if (szam === 0) {
        zoldre();
      }
    }
  }
  function zoldre() {
    <style>
      
    </style>
  }
  return (
    <div>
      <button onClick={() => {setSzam(randomSzam()); visszaSzamlalo(szam);}} className="tab" >Várj a zöld képernyőre</button>
      <button onClick={() => { setWaiting(!waiting); setSzam(randomSzam()); }} >Indítás</button>
    </div>
    

    
  )
}


export default App

