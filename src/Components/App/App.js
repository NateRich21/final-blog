import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from '../../logo.svg';
import './App.css';

import Nav from '../Nav/Nav';
import PostList from './../PostList/PostList.js';
import CreatePost from './../CreatePost/CreatePost.js';

function App() {
	return (
		<Router>
			<div className="App">
			<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/create-post' component={CreatePost} />
					<Route path='/post-list' component={PostList} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => {
	return <h1>Home</h1>
}

export default App;
