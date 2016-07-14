import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header, Footer, Content } from './components';

ReactDOM.render(
    <div className="main">
        <Header />
            <Content />
        <Footer />
    </div>,
    document.getElementById('root')
);