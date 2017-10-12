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
			Contacts: {},
			SelectedAccountId: ''
		}
		this.setAccount = this.setAccount.bind(this);
	}

	setAccount(accountId) {
		this.setState({
			SelectedAccountId: accountId
		});
	}

	componentWillMount() {
		getState(this);
	}

	render() {
		return(
			<div>
				{					
					this.state.Accounts.map(
						Account => <List key={Account.Id} Data={Account} setAccount={this.setAccount} />
					)
				}
				{
					this.state.SelectedAccountId in this.state.Contacts
					? this.state.Contacts[this.state.SelectedAccountId].map(
							Contact => <List key={Contact.Id} Data={Contact} setAccount={this.setAccount} />
						)
					: null
				}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));