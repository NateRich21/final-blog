import React from 'react';
import '../ViewPost/ViewPost.css';

class ViewPost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			singlePost: [],
			id: this.props.location.state.id
		}

		this.getSinglePost = this.getSinglePost.bind(this);
	}

	getSinglePost = _ => {
		fetch(`http://localhost:8000/posts/view-post?id=${this.state.id}`)
			.then(response => response.json())
			.then(response => this.setState({ singlePost: response.data }))
			.catch(err => console.log(err))
	}

	render() {
		this.getSinglePost();
		console.log(this.state.singlePost)
		return (
			<div className="App">
				<h1>Post Title</h1>
				{this.state.singlePost.map(post => {
					return(
						<div>
							<h3>{post.title}</h3>
							<h2>{post.author}</h2>
							<p>{post.content}</p>
						</div>
					);
				})}
			</div>
		)
	}
}

export default ViewPost;
