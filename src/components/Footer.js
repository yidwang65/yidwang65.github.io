import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section class='social-media'>
            <div class='social-media-wrap'>
                <div class='social-icons'>
                <a
                href='https://github.com/yidwang65'
                target='_blank'
                >
                <i class='fab fa-github'/>
                </a>
                <a
                href='https://www.linkedin.com/in/yida-wang-738088200/'
                target='_blank'
                >
                <i class="fab fa-linkedin"></i>
                </a>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer;