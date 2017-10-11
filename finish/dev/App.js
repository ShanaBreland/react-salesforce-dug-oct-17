import React from 'react';
import ReactDOM from 'react-dom';
import '/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {

	}

	render() {
		return(
			<div>
				Hello New York City!
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));