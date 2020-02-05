import React from 'react';

import './PostListItem'


class PostListItem extends React.Component {
	constructor(props) {
		super(props);
	}

//-------------------------------------------------------

	render() {
		return(
			<div className='PostListItem'>
				<div className='PostListItem-info'>
					<h3>{this.props.post.title}</h3>
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
