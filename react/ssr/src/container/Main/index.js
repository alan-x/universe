import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {TabBar} from 'antd-mobile';
import './index.scss';

class Main extends React.Component {
	render() {
		const {location, history, route} = this.props;
		return (
			<div className="app-main">
				<div className="app-main-content">
					<Switch>
						{
							route.children.map((r) => (
								<Route key={r.path} path={r.path} render={(props) => <r.component {...props} route={r}/>}/>
							))
						}
					</Switch>
				</div>
				<div className="app-tabbar">
					<TabBar>
						<TabBar.Item
							title="首页"
							key="index"
							icon={<i className="iconfont iconshouye"/>}
							selectedIcon={<i className="iconfont iconicon-home"/>}
							selected={['/', '/main/home'].includes(location.pathname)}
							onPress={() => history.push('/main/home')}
						/>
						<TabBar.Item
							title="个人中心"
							key="mine"
							icon={<i className="iconfont iconmine"/>}
							selectedIcon={<i className="iconfont icongerenzhongxin-xuanzhong"/>}
							selected={['/main/mine'].includes(location.pathname)}
							onPress={() => history.push('/main/mine')}
						/>
					</TabBar>
				</div>
			</div>
		);
	}
}

export default Main;
