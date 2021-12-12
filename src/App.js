import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// Trying out:
//   https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/


const initialBooks = [
  {
      name: "Harry Potter and the Philosophers Stone",
      author: "J. K. Rowling",
      genre: "fantasy"
  },{
      name: "The Pedagogy of Freedom",
      author: "Bell hooks",
      genre: "non-fiction"
  },{
      name: "Harry Potter and the Chamber of Secrets",
      author: "J. K. Rowling",
      genre: "fantasy"
  },{
      name: "Gilgamesh",
      author: "Derrek Hines",
      genre: "poetry"
  }
];

function App() {

  const [books, setBooks] = useState(initialBooks);

  //const refContainer = useRef('myDiv')

  const d3Container = useRef(null);


  /*
  setBooks(books.concat(
    {
        name: "50 vegan dishes",
        author: "Antti Leppänen",
        genre: "non-fiction"
    }
  ));

  */

  useEffect( () => {

    // this seems to need to be here, otherwise it won't render
    // on reload for some reason?
    // note: it still doesn't seem to render a second time... not sure...
    // seems like we're setting two frameworks that manipulate the DOM to fight
    // each other (React and D3)
    if(d3Container.current) {

      // Ok, if you declare the variable here, rather than up at the start
      // of the function, it seems to render on every refresh.
      // Thanks to website:
      //  https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
      const d3Books = d3.select(d3Container.current)

      d3Books.style('background-color', 'blue');
      //d3Books.style('color', 'white');
      d3Books.append("li").text("banana")
      d3Books.append("li").text("apple")


    }
  },
    // useEffect dependency parameters (updates when the vars in this array change).
    [d3Container.current]
  );
  return(
    <d3Books ref={d3Container} />
  );
}


export default App;
