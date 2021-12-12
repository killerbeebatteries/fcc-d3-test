import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';


// Trying out:
//   https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/

/*

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

*/

// trying to get D3 working with a React class.

// following:
// 	https://medium.com/@varvara.munday/d3-in-react-a-step-by-step-tutorial-cba33ce000ce

class App extends React.Component {

	constructor(props) {
		super(props)
		this.myRef = React.createRef();
		this.dataset = [100, 200, 300, 400, 500];
	}

	componentDidMount() {
		/*
		// initial demo test
		console.log(this.myRef);
		d3.select(this.myRef.current)
			.append('p')
			.text('Hello from D3');
		*/

		let size = 500;
		let svg = d3.select(this.myRef.current)
			.append('svg')
			.attr('width', size)
			.attr('height', size);

		let rect_width = 95;
		svg.selectAll('rect')
			.data(this.dataset)
			.enter()
			.append('rect')
			.attr('x', (d, i) => 5 + i*(rect_width + 5))
			.attr('y', d => size - d)
			.attr('width', rect_width)
			.attr('height', d => d)
			.attr('fill', 'teal');

	}

    render() {
		/*
		return(
			<div ref="temperatures"></div>
		)
		*/

		return(
			<div ref={this.myRef}></div>
		)
	}
}

/*
function Temperature(props) {
	const temperatureData = [ 8, 5, 13, 9, 12 ]
	d3.select(this.refs.temperatures)
		.selectAll("h2")
		.data(temperatureData)
		.enter()
		.append("h2")
		.text("New Temperature")

}

*/

export default App;
