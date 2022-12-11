import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className='sidebar'>
        <h2 className='title'>New</h2>

        <article className='post'>
            <h3 className='post-title'>Hydrogen VS Electric Cars</h3>
            <p className='description'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>

        <article className='post'>
            <h3 className='post-title'>The Downsides of AI Artistry</h3>
            <p className='description'>What are the possible adverse effects of on-demand AI image generation?</p>
        </article>

        <article className='post'>
            <h3 className='post-title'>Is VC Funding Drying Up?</h3>
            <p className='description'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </article>
    </aside>
  )
}

export default Sidebar;