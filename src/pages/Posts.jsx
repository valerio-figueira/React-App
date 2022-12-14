import React from 'react'
import { useParams } from 'react-router-dom';

// CUSTOM HOOK
import FetchAPI from '../hooks/FetchAPI';

// COMPONENTS
import LoadingShimmer from '../components/LoadingShimmer';

// CSS
import './Posts.css';

function Posts() {
    // useParams bring an object with all URL params
    const { id } = useParams();
    const postType = window.location.href;
    let path;

    if(postType.match('Aside')){
        path = 'aside-posts';
    } else{
        if(postType.match('Home')){
            path = 'home-posts';
        } else{
            if(postType.match('Popular')){
                path = 'popular';
            } else{
                path = 'posts';
            }
        }
    }

    // Fetch post by id
    const URL = `https://aedifico.netlify.app/${path}/${id}`;

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
            <LoadingShimmer />
        )}
    </>
  )
}

export default Posts;
