import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../auth/Login_page';
import Home from '../container/home';
import {Redirect} from "react-router-dom";

function Routes(){
	const isLoggedIn = localStorage.getItem('myData');
	console.log(isLoggedIn);
	return (
        <Router>
			{!isLoggedIn ? (
				<Switch>
					<Route path="/login" component={Login} />
					<Redirect to="/login" />
				</Switch>
			):(
				<Switch>
					<Route path="/home" exact component={Home} />
					<Redirect to="/home" />
				</Switch>
			)}
            
        </Router>
    )
}

export default Routes;