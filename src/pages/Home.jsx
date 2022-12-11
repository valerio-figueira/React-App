import React from 'react';
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader';

// CUSTOM HOOK
import FetchAPI from '../hooks/FetchAPI';

// CSS
import './Home.css';
const override = {
  display: "block",
  margin: "4rem auto",
}

const URL = 'https://resilient-kangaroo-970dc9.netlify.app/home-posts';

function Home() {
  const posts = FetchAPI(URL);

  return (
    <>
      {posts ? (
        posts.map(post => (
        <section key={post._id} className="home">
          
            <div className="hero">
                <Link to={`/Post/home/${post._id}`}>
                  <img src={post.image[0]} alt={post.title} />
                </Link>
            </div>

            <article className='home-post'>

                <Link to={`/Post/home/${post._id}`}>
                  <h2 className='title'>{post.title}</h2>
                </Link>

                <p className='description'>{post.description}</p>

                <Link to={`/Post/home/${post._id}`} className='read-more'>READ MORE</Link>
            </article>
        </section>
        ))
      ) : (
        <ClipLoader color={"slateblue"} size={100} aria-label="Loading Spinner" data-testid="loader" cssOverride={override} />
      )}
    </>
  )
}

export default Home;