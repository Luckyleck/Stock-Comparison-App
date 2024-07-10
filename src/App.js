import './App.css';
import React from 'react';
import Stock from './components/stock/Stock';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <p>HELLO!!!</p>
                <Stock />
            </header>
        </div>
    );
}

export default App;
