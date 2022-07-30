import React from 'react';
import './Cards.css';
import ProjectCard from './ProjectCard';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ProjectCard
              header = 'Password Management Software'
              link = 'https://github.com/yidwang65/cs411pwmanager'
              text='This is CS411(Software Engineering) class project. This is 
              a password management system that allow user to add, delete, and filter
              the password'
            />
            <ProjectCard
              header = 'Personal Website'
              link = 'https://github.com/yidwang65/personal-website'
              text='This is the source code for my personal website'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;