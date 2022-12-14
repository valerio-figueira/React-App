import React from 'react'
import { Link } from 'react-router-dom';

      // CSS
      import './Popular.css';

      // Components
      import LoadingShimmer from '../components/LoadingShimmer';

      // HOOKS
      import FetchAPI from '../hooks/FetchAPI';

  const URL = "https://aedifico.netlify.app/popular";


const Popular = () => {
  const posts = FetchAPI(URL);

  return (
    <div className='Popular'>
      {posts ? (
        posts.map(post => {
          return (
            <article className='post' key={post._id}>
              <Link to={`/Popular/${post._id}`}>
                <h2 className='title'>{post.title}</h2>
              </Link>
              <Link to={`/Popular/${post._id}`}>
                <img src={post.image[0]} alt={post.title} />
              </Link>
              <Link to={`/Popular/${post._id}`}>
                <p className='description'>{post.description}</p>
              </Link>
            </article>
          )
        })
      ) : (
        <LoadingShimmer />
      )}
    </div>
  )
}

export default Popular