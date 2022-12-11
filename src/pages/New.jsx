import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Link } from 'react-router-dom';

    // HOOKS
    import FetchAPI from '../hooks/FetchAPI';

    // CSS
    import './New.css'
    const override = {
      display: "block",
      margin: "2rem auto",
    }

const URL = 'http://localhost:8888/posts';


const New = () => {
  const posts = FetchAPI(URL);

  return (
    <section className='Posts'>
      <h2>New</h2>
      {posts ? (
        posts.map(post => (
          <article className='post' key={post._id}>
            <Link to={`/Post/${post._id}`}>
              <img src={post.image} alt={post.title} />
            </Link>

            <Link to={`/Post/${post._id}`}>
              <h3 className='title'>{post.title}</h3>
            </Link>

            <Link to={`/Post/${post._id}`}>
              <p className='description'>{post.description}</p>
            </Link>

          </article>
        ))
      ) : (
        <ClipLoader color={"slateblue"} size={100} aria-label="Loading Spinner" data-testid="loader" cssOverride={override} />
      )}
    </section>
  )
}

export default New