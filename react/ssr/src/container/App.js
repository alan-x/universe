import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './index.scss';
import routes from './../config/route.config';

class App extends React.Component {
	render() {
		return <div className="app">
			<div className="app-content">
				<Switch>
					{
						routes.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								render={(props) => <route.component {...props} route={route}/>}/>
						))
					}
				</Switch>
			</div>
		</div>;
	}
}

export default App;
