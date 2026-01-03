// const element1 = React.createElement('h1',{id:'title'},"hello india");




//create element usign html
// const element = <h1 id='title'>hello india </h1>
//jsx: javascript XML: look like HTML
//JSX --> React.createElement()

// const element2 = <div>
//   <h1>
//     hi
//   </h1>
// </div>

// root.render(element)
// root.render(element2)

// Rect component : its are function

function App(name){
  return (
    <h1>hello {name}</h1>
  );
}
 
const a = App('india');

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(App())  //1st way of component call
// root.render(<App/>) //2nd way to call component

// root.render(a)  //3rd way 

const courses = ['HTML','CSS','JavaScript','React'];
const element =  (
  <ul>
    {
      courses.map(courses=><li>{courses}</li>)
    }
  </ul>
)

root.render(element)