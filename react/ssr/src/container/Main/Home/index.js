import React from 'react';
import {NavBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getNewsAction} from './actions';

class Home extends React.Component {
	componentDidMount() {
		const {getNews} = this.props;
		getNews();
	}

	render() {
		const {route, news} = this.props;
		return (
			<div>
				<NavBar>
					{route.title}
				</NavBar>
				{news.map(newsItem => (
					<p key={newsItem.title}>{newsItem.title}</p>
				))}
			</div>
		);
	}
}

export default connect(
	(state) => ({news: state.home.news}),
	(dispatch) => ({getNews: () => dispatch(getNewsAction())})
)(withRouter(Home));
