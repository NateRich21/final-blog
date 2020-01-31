import React from 'react';
import './Nav.css';
import CreatePost from '../CreatePost/CreatePost';
import PostList from '../PostList/PostList';
import { Link } from 'react-router-dom';


function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className='nav-links'>
				<Link to='/create-post'>
					<li>Create Post</li>
				</Link>
				<Link to='/post-list'>
					<li>View Posts</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
