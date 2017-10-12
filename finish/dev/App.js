import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { getState } from './Controller';
import List from './List';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Accounts: [],
			Contacts: {}
		}
	}

	componentWillMount() {
		getState(this);
	}

	render() {
		return(
			<div>
				{					
					this.state.Accounts.map(
						Account => <List key={Account.Id} Account={Account} />
					)
				}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));