import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
	const [postBody, setPostBody] = useState('');
	const [postAuthor, setPostAuthor] = useState('');

	function changeAuthorHandler(event) {
		setPostAuthor(event.target.value);
	}

	function changeBodyHandler(event) {
		setPostBody(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		const postData = {
			author: postAuthor,
			body: postBody,
		};
		props.onAddPost(postData);
		props.onCancel();
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={changeBodyHandler} />
			</p>
			<p>
				<label htmlFor="name">Name</label>
				<input id="name" type="text" required onChange={changeAuthorHandler} />
			</p>
			<p className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Submit</button>
			</p>
		</form>
	);
}

export default NewPost;
