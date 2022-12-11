import React from 'react'
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

// CUSTOM HOOK
import FetchAPI from '../hooks/FetchAPI';

// CSS
import './Posts.css';
const override = {
    display: "block",
    margin: "2rem auto",
}

function Posts() {
    // useParams bring an object with all URL params
    const { id } = useParams();
    const postType = window.location.href;
    let path;

    if(postType.match('aside')){
        path = 'aside-posts';
    } else{
        if(postType.match('home')){
            path = 'home-posts'
        } else{
            path = 'posts'
        }
    }

    // Fetch post by id
    const URL = `http://localhost:8888/${path}/${id}`

    // USE HOOK TO PULL DATA FROM THE SERVER
    const post = FetchAPI(URL);

  return (
    <>
        {post ? (
            <article className='post' key={post._id}>
                <h2 className='title'>{post.title}</h2>
                    
                {typeof post.image == "object" ? (
                    <img src={post.image[1]} alt={post.title} className="picture" />
                ) : (
                    <img src={post.image} alt={post.title} className="picture" />
                )}

                {post.content.map((paragraph, i) => (
                    <p className='content' key={i} >{paragraph}</p>
                ))}
                <p className='date'>{post.date}</p>
            </article>
        ) : (
            <ClipLoader color={"slateblue"} size={100} aria-label="Loading Spinner" data-testid="loader" cssOverride={override} />
        )}
    </>
  )
}

export default Posts;
