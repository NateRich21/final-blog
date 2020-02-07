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
						pathname: `view-post`,
						state: {
							id: this.props.post.id
						}
					}}>
						<h1>{this.props.post.title}</h1>
					</Link>
					<p>
						{this.props.post.author} |
						{this.props.post.id}
					</p>
				</div>
			</div>
		)
	}
};

export default PostListItem;
