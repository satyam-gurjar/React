function Header(){
  return(
    <h1> Welcome to Indian Election Commission </h1>
  );
}

function App(){
  return(
    <Header></Header>
  );
}

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);