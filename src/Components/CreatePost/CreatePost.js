import React from 'react';
import './CreatePost.css';

class CreatePost extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			author: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.createNewPost = this.createNewPost.bind(this);
	}


	handleChange(e) {
		this.setState({ [e.target.name] : e.target.value });
	}

	//---------------------------------------------------------------

	createNewPost = _ => {
		fetch(`http://localhost:8000/posts/add?title=${this.state.title}&author=${this.state.author}`)
			.then(response => response.json())
			.then(this.props.getAllPosts)
			.catch(err => console.log(err))

		this.setState({
			title: '',
			author: ''
		})
	}


	render() {
		return (
			<div className='create-post-page'>
				<div className="post-form">
					<div id='name'>
						<input
							type='text'
							value={this.state.title}
							onChange={this.handleChange.bind(this)}
							name='title'
							id='name'
							placeholder='The title of your post'/>
					</div>
					<div id='title'>
						<input
							type='text'
							value={this.state.author}
							onChange={this.handleChange.bind(this)}
							name='author'
							placeholder='Your name' />
					</div>
				</div>
				<button onClick={this.createNewPost}>save</button>
			</div>
		);
	}
}


export default CreatePost;
