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

// function App(name){
//   return (
//     <h1>hello {name}</h1>
//   );
// }
 
// const a = App('india');



// root.render(App())  //1st way of component call
// root.render(<App/>) //2nd way to call component

// root.render(a)  //3rd way 
//React.crateElement('ul',null,[React.createElement('ul',null,<li>HTML</li>)])
//React.crateElement('ul',null,[React.createElement('ul',null,<li>CSS</li>)])


// const courses = ['HTML','CSS','JavaScript','React'];
// const element =  (
//   <ul>
//     {
//       courses.map(courses=><li>{courses}</li>)
//     }
//   </ul>
// )

// function App(props){
//   return(
//     <h1>hello india {props.name} {props.age}</h1>
//   )
// }
// const ab = {backgroundColor:'red',color:'white'}

// const element = <App name='india' age={11}></App>

// const elementq =  <h1 id='title' className="first" style={ab}>hello india</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(elementq)