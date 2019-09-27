import React from 'react'
import Navbar from './../components/Navbar'
import Header from './../components/Header'
import BlockExplorers from './../containers/BlockExplorer';
import "../css/App.css";
const Blockexplorer = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <BlockExplorers />
        </div>

    );
};

export default Blockexplorer;
