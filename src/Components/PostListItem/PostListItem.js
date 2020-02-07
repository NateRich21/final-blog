import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import ViewPost from './../ViewPost/ViewPost.js'

import './PostListItem.css'


class PostListItem extends React.Component {
	constructor(props) {
		super(props);
	}

//-------------------------------------------------------

	render() {
		return(
			<div className='PostListItem'>
				<div className='PostListItem-info'>
					<Link to={{
						pathname: `/view-post`,
						state: {
							postId: this.props.post.id
						}
					}}>
						<li>{this.props.post.title}</li>
					</Link>
					<p>
						{this.props.post.author} |
						{this.props.post.id}
					</p>
				</div>

				<Route
					path='/view-post'
					render={(props) => <ViewPost {...props} 
					id={this.props.post.id} />}
				/>
			</div>
		)
	}
};

export default PostListItem;
