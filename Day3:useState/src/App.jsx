import { useState  } from "react";

function App(){

  // function increaseNumber(){
  //   count++;
  //   // const para = document.querySelector('p');
  //   // para.textContent = `Counter: ${count}`;

  // }

  let [count, setCount] = useState(0);
  function increaseNumber(){
   count++;
   setCount(count);
  }
  

  return(
    <>
    <p>Counter: {count}</p>
    <button onClick={increaseNumber}>Increment</button>
    </>
  )
}


export default App;