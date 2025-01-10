import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

export default function PostList({ showModal, onCloseModal }) {
	const [postBody, setPostBody] = useState('');
	const [postAuthor, setPostAuthor] = useState('');

	function changeAuthorHandler(event) {
		setPostAuthor(event.target.value);
	}

	function changeBodyHandler(event) {
		setPostBody(event.target.value);
	}

	return (
		<>
			{showModal ? (
				<Modal onBackdropClicked={onCloseModal}>
					<NewPost
						onBodyChange={changeBodyHandler}
						onAuthorChange={changeAuthorHandler}
					/>
				</Modal>
			) : null}

			<ul className={classes.posts}>
				<Post author={postAuthor} body={postBody} />
				<Post author="Prachi" body="Hello everyone." />
			</ul>
		</>
	);
}
