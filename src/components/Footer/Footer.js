import React from 'react';
import alexPhoto from '../../assets/photo/Alex.jpeg';
import olgaPhoto from '../../assets/photo/Olga.jpeg';
import './Footer.css'

const Footer = () => {

  return (
    <footer>
      <div className="created-by">
          <div className="creators">
              <div className="creator">
                  <a href="https://github.com/luckyleck">
                      <img src={alexPhoto} alt="Alex Lecky" />
                      <p>Alex Lecky</p>
                  </a>
              </div>
              <div className="creator">
                  <a href="https://github.com/olga-bessonova">
                      <img src={olgaPhoto} alt="Olga Bessonova" />
                      <p>Olga Bessonova</p>
                  </a>
              </div>
          </div>
      </div>
    </footer>
  )
};

export default Footer;
