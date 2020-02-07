import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from '../../logo.svg';
import './App.css';

import Nav from '../Nav/Nav';
import PostList from './../PostList/PostList.js';
import CreatePost from './../CreatePost/CreatePost.js';
import ViewPost from './../ViewPost/ViewPost.js'


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allPosts: [],
			id: null,
			singlePost: []
		};

	this.getAllPosts = this.getAllPosts.bind(this);
	this.getSinglePost = this.getSinglePost.bind(this);
	this.updateId = this.updateId.bind(this);
	}
//-------------------------------------------------------------------------------

	componentDidMount() {
		this.getAllPosts();
	}
//-------------------------------------------------------------------------------


// RETRIEVES TEST_TABLE-DATA BY ACCESSING THE /POST SUBDIRECTORY OF THE URL \\
// NEED TO SPEND MORE TIME UNDERSTANDING THIS BLOCK \\
	getAllPosts = _ => {
		fetch('http://localhost:8000/posts')
			.then(response => response.json())
			.then(response => this.setState({ allPosts: response.data }))
			.catch(err => console.error(err))
	}
//-------------------------------------------------------------------------------

	getSinglePost = _ => {
		fetch(`http://localhost:8000/posts/view-post?id=${this.state.id}`)
			.then(response => response.json())
			.then(response => this.setState({ singlePost: response.data }))
			.catch(err => console.log(err))
	}

//--------------------------------------------------------------------------

	updateId = (id) => {
		this.setState({ id: id })
	}

	render() {
		const { allPosts } = this.state;
		return (
			<Router>
				<div className="App">
				<Nav />
					<Switch>
						<Route
							path='/'
							exact
							component={Home}
						/>
						<Route
							path='/create-post'
							render={(props) => <CreatePost {...props}
							refresh={this.getAllPosts}/>
							}
						/>
						<Route
							path='view-post'
							component={ViewPost} />
						<Route
							path='/post-list'
							render={(props) => <PostList {...props} 
								allPosts={allPosts} 
								getSinglePost={this.getSinglePost}/>}
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
