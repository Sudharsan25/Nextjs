import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

import classes from './PostList.module.css';

export default function PostList(props) {
	const posts = useLoaderData();

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}

			{posts.length === 0 && (
				<p style={{ textAlign: 'center', color: 'white' }}>
					No posts yet. Add a new one by clicking the button above.
				</p>
			)}
		</>
	);
}
