import React from 'react';
import '../ViewPost/ViewPost.css';

class ViewPost extends React.Component {

	componentDidMount() {
		const { handle } = this.props.match.params
		const { post_id } = this.props.location.state

		console.log(post_id);
	}

	render() {
		return (
			<div className="App">
			<h1>Post Title</h1>
			</div>
		);
	}
}

export default ViewPost;
