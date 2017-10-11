import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Accounts: [],
			Contacts: {}
		}
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