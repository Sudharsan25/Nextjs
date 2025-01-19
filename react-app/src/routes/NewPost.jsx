import { Form, Link, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';

function NewPost(props) {
	return (
		<Modal>
			<Form method="post" className={classes.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" name="body" required rows={3} />
				</p>
				<p>
					<label htmlFor="name">Name</label>
					<input id="name" name="author" type="text" required />
				</p>
				<p className={classes.actions}>
					<Link type="button" to="/">
						Cancel
					</Link>
					<button type="submit">Submit</button>
				</p>
			</Form>
		</Modal>
	);
}

export default NewPost;

export async function action({ request }) {
	const data = await request.formData();
	const postData = Object.fromEntries(data);

	fetch('http://localhost:8080/posts', {
		method: 'POST',
		body: JSON.stringify(postData),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return redirect('/');
}
