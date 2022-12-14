import React from 'react';
import { Link } from 'react-router-dom';

    // HOOKS
    import FetchAPI from '../hooks/FetchAPI';

    // CSS
    import './New.css';

    // COMPONENTS
    import LoadingShimmer from '../components/LoadingShimmer';


const URL = 'https://aedifico.netlify.app/posts';


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
        <LoadingShimmer />
      )}
    </section>
  )
}

export default New