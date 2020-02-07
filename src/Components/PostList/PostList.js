import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import PostListItem from './../PostListItem/PostListItem.js'
import ViewPost from './../ViewPost/ViewPost.js'

import './PostList.css';

class PostList extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	componentDidMount() {
		this.getAllPosts();
	}

	render() {
		return (
			<div className='PostListPage'>
				<h1>View Posts Here</h1>
				<div className="PostListInfo">
					<ul>
						{this.props.allPosts.map(post => {
							return <li key={post.id}><PostListItem post={post} postId={post.id} /></li>
						})}
					</ul>

					<Route 
						path={'/view-post/:postId'} 
						component={ViewPost} />
				</div>
			</div>
		);
	};
}

export default PostList;
