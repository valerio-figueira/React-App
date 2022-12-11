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
    import Categories from './pages/Categories';
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
                        <Route path='/Categories' element={<Categories />} />
                        <Route path='/Post/:id' element={<Posts />} />
                        <Route path='/Post/aside/:id' element={<Posts />} />
                        <Route path='/Post/home/:id' element={<Posts />} />
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