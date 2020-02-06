import React from 'react';
import PostListItem from './../PostListItem/PostListItem.js'

import './PostList.css';

class PostList extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className='PostListPage'>
				<h1>View Posts Here</h1>
				<div className="PostListInfo">
					<ul>
						{this.props.allPosts.map(post => {
							return <li key={post.id}><PostListItem post={post} /></li>
							})}
					</ul>
				</div>
			</div>
		);
	};
}

export default PostList;
