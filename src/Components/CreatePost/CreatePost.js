import React from 'react';
import './CreatePost.css';

function CreatePost() {


		const [state, setState] = React.useState({
			name: '',
			title: '',
			content: ''
		});

	function handleChange(evt) {
	 	const value = evt.target.value;
	 	setState({
	   		...state,
	    	[evt.target.name]: value
	  	});
	}

	return (
		<div className="post-form">
			<div id='name'>
				<input
					type='text'
					value={state.name}
					onChange={handleChange}
					name='name'
					id='name'
					placeholder='Your name'/>
			</div>
			<div id='title'>
				<input
					type='text'
					value={state.title}
					onChange={handleChange}
					name='title'
					placeholder='The title of your post' />
			</div>
			<div id='content'>
				<input
					type='text'
					value={state.content}
					onChange={handleChange}
					name='content'
					placeholder='Write your post here'/>
			</div>
		</div>
	);
}


export default CreatePost;
