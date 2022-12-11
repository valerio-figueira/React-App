import React from 'react'
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

// HOOKS
import FetchAPI from '../hooks/FetchAPI';

// CSS
import './Downbar.css'
const override = {
    display: "block",
    margin: "2rem auto",
}


function Downbar() {
    const posts = FetchAPI('http://localhost:8888/aside-posts');

  return (
    <aside className='downbar'>
        {posts ? (
            posts.map(post => (
                <article className='downbar-post' key={post._id}>
                    <Link to={`/Post/aside/${post._id}`}>
                        <img src={post.image[0]} alt={post.title} />
                    </Link>
                    <div className='box'>
                        <h3 className='id-post'>{post.post_number}</h3>
                        <Link to={`/Post/aside/${post._id}`}>
                            <h4 className='title'>{post.title}</h4>
                        </Link>
                        <Link to={`/Post/aside/${post._id}`}>
                            <p className='description'>{post.description}</p>
                        </Link>
                    </div>
                </article>
            ))
        ) : (
            <ClipLoader color={"slateblue"} size={100} aria-label="Loading Spinner" data-testid="loader" cssOverride={override} />
        )}

    </aside>
  )
}

export default Downbar;