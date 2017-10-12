import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="item" onClick={() => this.props.setAccount(this.props.Data.Id)}>
				{this.props.Data.Name}
			</div>
		);
	}
}

export default List;