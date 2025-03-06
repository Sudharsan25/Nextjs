"use client";

import togglePostLikeStatus from '@/actions/posts';
import { formatDate } from '@/lib/format';
import { useOptimistic } from 'react';
import LikeButton from './like-icon';

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            {/* togglePostLikeStatus.bind() is used because we are passing an function that takes arguments to form action
            but since formaction only takes pointers to functions,
            we need to bind the function to null to pass it as a direct reference.
            */}
            {/* isLiked prop is passed to LikeButton component */}
            <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked': ''}> 
            
              <LikeButton />
            </form>
            
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
   const [optimisticPost, updateOptimisticPost] = useOptimistic(posts, (prevPosts, updatedPostId)=>{
     const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

     if(updatedPostIndex === -1){
      return prevPosts;
     }

     const updatedPost = {...prevPosts[updatedPostIndex] };
     updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
     updatedPost.isLiked =!updatedPost.isLiked;
     const newPosts = [...prevPosts];
     newPosts[updatedPostIndex] = updatedPost;

     return newPosts;
   });

  if (!optimisticPost || optimisticPost.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId){
    updateOptimisticPost(postId);
    await togglePostLikeStatus(postId); 
  }

  return (
    <ul className="posts">
      {optimisticPost.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost}/>
        </li>
      ))}
    </ul>
  );
}
