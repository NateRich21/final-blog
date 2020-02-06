import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
					<Link to={`/view-post?id=${this.props.id}`}>
						<li>{this.props.post.title}</li>
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
