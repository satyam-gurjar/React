const React ={
  createElement : function(tag,attributes,children)
  {
    const element = document.createElement(tag);
    element.textContent = children;
    for(const key in attributes)
    {
      if(key === 'style'){
        Object.assign(element.style,attributes.style);
      }
      else
      element[key] = attributes[key]
    }
    return element
  }
}


const ReactDom = {
  render : function (child,parent){
          parent.append(child);
  }
}


const element1 = React.createElement("h1",{className:'element',id:'first',style:{fontSize:'40px',color:'yellow'}},"hello coder army");
const element2 = React.createElement("p",{className:'pare'},"LOREM");


const root = document.getElementById('root');
ReactDom.render(element1,root)


// const element1 = document.createElement('h1');
// element1.textContent = 'hello coder amy';
// element1.classList = 'element';
// element1.id = 'first';
// element1.style.fontSize = '30px';
// element1.style.backgroundColor = 'orange';


// const element2 = document.createElement('h1');
// element2.textContent = 'hello coder amy';
// element2.classList = 'element';
// element2.id = 'first';
// element2.style.fontSize = '30px';
// element2.style.backgroundColor = 'pink';