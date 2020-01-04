import React from 'react';
import {NavBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class Mine extends React.Component {
	render() {
		const {route} = this.props;
		return (
			<div>
				<NavBar>
					{route.title}
				</NavBar>
                mine
			</div>
		);
	}
}

export default withRouter(Mine);
