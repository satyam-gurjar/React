import { useCallback, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sum from "./Sum.";
import Post from "./Post";
import Fun from "./function";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(100000);

  // function calculatePrime(){

  //   let total = 0;
  //   if(number>1)
  //     total++;

  //   for(let i=3;i<=number;i++)
  //   {
  //     total++
  //     for(let j=2; j<i; j++){
  //       if(i%j==0){
  //         total--;
  //         break;
  //       }
  //     }
  //   }
  //   return total;
  // }

  const handleClick = useCallback(() => {
    console.log("handle click");
  }, []);


  // function handleClick(){
  //   console.log('handle',count);
  // }

  const Prime = useMemo(() => {
    let total = 0;
    if (number > 1) total++;

    for (let i = 3; i <= number; i++) {
      total++;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }, [number]);


  const obj = useMemo(()=>{
    return {name:"satya", age:24}
  },[])


  console.log("app");

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Your current numver: {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        incresenumber
      </button>
      <h3>Total number of prime: {Prime}</h3>
      <button onClick={handleClick}>click</button>
      <Sum number={number}></Sum>
      <Post value={obj} ></Post>
      <Fun value={handleClick}></Fun>

    </>
  );
}

export default App;
