import classes from './NewPost.module.css';

function NewPost(props) {
	return (
		<form className={classes.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={props.onBodyChange} />
			</p>
			<p>
				<label htmlFor="name">Name</label>
				<input id="name" type="text" required onChange={props.onAuthorChange} />
			</p>
		</form>
	);
}

export default NewPost;
