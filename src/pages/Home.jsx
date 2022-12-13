import React from 'react';
import { Link } from 'react-router-dom'

    // CUSTOM HOOK
    import FetchAPI from '../hooks/FetchAPI';

    // CSS
    import './Home.css';

    // COMPONENTS
    import LoadingShimmer from '../components/LoadingShimmer';


const URL = 'https://resilient-kangaroo-970dc9.netlify.app/home-posts';

function Home() {
  const posts = FetchAPI(URL);

  return (
    <>
      {posts ? (
        posts.map(post => (
        <section key={post._id} className="home">
          
            <div className="hero">
                <Link to={`/Home/Post/${post._id}`}>
                  <img src={post.image[0]} alt={post.title} />
                </Link>
            </div>

            <article className='home-post'>

                <Link to={`/Home/Post/${post._id}`}>
                  <h2 className='title'>{post.title}</h2>
                </Link>

                <p className='description'>{post.description}</p>

                <Link to={`/Home/Post/${post._id}`} className='read-more'>READ MORE</Link>
            </article>
        </section>
        ))
      ) : (
        <LoadingShimmer />
      )}
    </>
  )
}

export default Home;