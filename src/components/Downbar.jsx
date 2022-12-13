import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

    // HOOKS
    import FetchAPI from '../hooks/FetchAPI';

    // CSS
    import './Downbar.css';

    // COMPONENTS
    import LoadingShimmerLine from './LoadingShimmerLine';


function Downbar() {
    const posts = FetchAPI('https://resilient-kangaroo-970dc9.netlify.app/aside-posts');

    function listeningToClick(){
        document.querySelectorAll('.downbar-post a')
        .forEach(link => {
            link.addEventListener('click', () => {
                console.log('passed')
                window.open('#header', '_self')
            })
        })

        document.querySelector('.leftButton').addEventListener('click', () => {
            document.querySelector('.downbar').scrollLeft -= 200;
        })

        document.querySelector('.rightButton').addEventListener('click', () => {
            document.querySelector('.downbar').scrollLeft += 200;
        })
    }
    
    useEffect(() => {
        listeningToClick()
    })
  return (
        <aside className='downbar'>
            <button className='leftButton fa fa-angle-left'></button>
            {posts ? (
                posts.map(post => (
                    <article className='downbar-post' key={post._id}>
                        <Link to={`/Aside/Post/${post._id}`}>
                            <img src={post.image[0]} alt={post.title} />
                        </Link>
                        <div className='box'>
                            <h3 className='id-post'>{post.post_number}</h3>
                            <Link to={`/Aside/Post/${post._id}`}>
                                <h4 className='title'>{post.title}</h4>
                            </Link>
                            <Link to={`/Aside/Post/${post._id}`}>
                                <p className='description'>{post.description}</p>
                            </Link>
                        </div>
                    </article>
                ))
            ) : (
                <LoadingShimmerLine />
            )}
        <button className='rightButton fa fa-angle-right'></button>
        </aside>
  )
}

export default Downbar;