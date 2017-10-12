import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				{this.props.Account.Name}
			</div>
		);
	}
}

export default List;