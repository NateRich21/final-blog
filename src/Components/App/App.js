import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from '../../logo.svg';
import './App.css';

import Nav from '../Nav/Nav';
import PostList from './../PostList/PostList.js';
import CreatePost from './../CreatePost/CreatePost.js';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allPosts: []
		};

	this.getAllPosts = this.getAllPosts.bind(this);
	}
//-------------------------------------------------------------------------------

	componentDidMount() {
		this.getAllPosts();
	}
//-------------------------------------------------------------------------------


// RETREIVES TEST_TABLE-DATA BY ACCESSING THE /POST SUBDIRECTORY OF THE URL \\
// NEED TO SPEND MORE TIME UNDERSTANDING THIS BLOCK \\
	getAllPosts = _ => {
		fetch('http://localhost:8000/posts')
			.then(response => response.json())
			.then(response => this.setState({ allPosts: response.data }))
			.catch(err => console.error(err))
	}




	render() {
		const { allPosts } = this.state;
		return (
			<Router>
				<div className="App">
				<Nav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/create-post'
							render={
								(props) => <CreatePost {...props}		   refresh={this.getAllPosts}/>
							}
						/>
						<Route
							path='/post-list'
							render={(props) => <PostList {...props} allPosts={allPosts}/>}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

const Home = () => {
	return <h1>Home</h1>
}

export default App;
