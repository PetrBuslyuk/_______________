import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header, Footer } from './components';

ReactDOM.render(
    <div className="main">
        <Header />
            <div className = "commentList">
                Hello world
            </div>
        <Footer />
    </div>,
    document.getElementById('root')
);