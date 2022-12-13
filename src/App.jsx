import React from 'react';

    // React Router
    import { BrowserRouter, Routes, Route } from 'react-router-dom';

    // Styles
    import './App.css';

    // Components
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    import Downbar from './components/Downbar';

    // Pages
    import Home from './pages/Home';
    import New from './pages/New';
    import Popular from './pages/Popular';
    import Trending from './pages/Trending';
    import About from './pages/About';
    import NotFound from './pages/NotFound';
    import Posts from './pages/Posts';


function App(){

    return (
        <div className='App'>

            <BrowserRouter>
                <Navbar />
                <main className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/New' element={<New />} />
                        <Route path='/Popular' element={<Popular />} />
                        <Route path='/Trending' element={<Trending />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Post/:id' element={<Posts />} />
                        <Route path='/Aside/Post/:id' element={<Posts />} />
                        <Route path='/Home/Post/:id' element={<Posts />} />
                        <Route path='/Popular/:id' element={<Posts />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
                <Sidebar />
                <Downbar />
            </BrowserRouter>

        </div>
    )
}

export default App;