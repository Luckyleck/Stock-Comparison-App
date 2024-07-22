import React from 'react';
import './Header.css';
import ai_graphic_flipped from '../../assets/photo/ai_graphic_flipped.png';

const Header = () => {
    return (
        <div className="header">
            <div className="top-section">
                <div className="text">
                    <h1 style={{ fontSize: '6em' }}>
                        let <span>AI choose.</span>
                    </h1>
                    <h1 style={{ fontSize: '3em' }}>
                        compare stocks and find your best investment
                    </h1>
                </div>
                <img id="header-image" src={ai_graphic_flipped} alt="AI graphic" />
            </div>
            <div className="bottom-text">
                <p>This is the text underneath both the left hand side text and right hand side image.</p>
            </div>
        </div>
    );
};

export default Header;