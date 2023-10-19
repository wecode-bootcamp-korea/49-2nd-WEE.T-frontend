import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img className="logo" src="/images/logo2.png" alt="로고이미지" />
            </Link>
          </div>

          <div className="col-md-4 text-center">
            <div className="social-icons">
              <a href="#!">
                <i className="fa fa-facebook fa-lg" />
              </a>
              <a href="#!">
                <i className="fa fa-twitter fa-lg" />
              </a>
              <a href="#!">
                <i className="fa fa-rss fa-lg" />
              </a>
              <a href="#!">
                <i className="fa fa-google-plus fa-lg" />
              </a>
              <a href="#!">
                <i className="fa fa-skype fa-lg" />
              </a>
              <a href="#!">
                <i className="fa fa-dribbble fa-lg" />
              </a>
            </div>
          </div>

          <div className="col-md-4 text-right">
            &copy; Copyright 2023 - WEE.T(우리들의 트레이너)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
