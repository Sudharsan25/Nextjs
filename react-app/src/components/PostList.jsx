import { useEffect, useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

export default function PostList({ showModal, onCloseModal }) {
	const [posts, setPosts] = useState([]);
	const [isFetching, setFetching] = useState(false);

	// You cannot Fetch data from the API like this directly as it will cause infinite recursion - solution - useEffect() hook
	// fetch('http://localhost:8080/posts')
	// 	.then((response) => response.json())
	// 	.then((data) => setPosts(data.posts));

	useEffect(() => {
		async function getPosts() {
			setFetching(true); // show loading spinner before fetching data
			const response = await fetch('http://localhost:8080/posts');
			const data = await response.json();
			setPosts(data.posts);
			setFetching(false); // hide loading spinner after fetching data
		}

		getPosts(); // this will fetch data from the API and set it to the state
	}, [posts]); // this array has the dependencies of the useEffect - when this array changes, useEffect is executed again

	function addPostHandler(postData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setPosts((existingPosts) => [postData, ...existingPosts]); /// use this method when the old state is dependent on the new state
	}

	return (
		<>
			{showModal ? (
				<Modal onBackdropClicked={onCloseModal}>
					<NewPost onCancel={onCloseModal} onAddPost={addPostHandler} />
				</Modal>
			) : null}
			{!isFetching && posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}

			{!isFetching && posts.length === 0 && (
				<p style={{ textAlign: 'center', color: 'white' }}>
					No posts yet. Add a new one by clicking the button above.
				</p>
			)}
			{isFetching && <p>Loading posts!</p>}
		</>
	);
}
