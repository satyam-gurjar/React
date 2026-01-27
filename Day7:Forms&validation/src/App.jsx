import { useState } from "react";

function App() {
    const  [name, setName] = useState('');
    const  [age,setAge]  = useState('');
    const  [password, setPass] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      console.log(name);
      console.log(age);
      console.log(password);
    }

    return (
      <>
      <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
      </div>
      <div>
        <input type="password" value={password} onChange={(e)=>setPass(e.target.value)} />
      </div>
      <button>Submit</button>
      </form>
      
      </>
    )
}

export default App;