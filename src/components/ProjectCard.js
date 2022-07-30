import React from 'react';

function ProjectCard(props) {
  return (
    <>
      <li className='cards__item'>
          <div className='cards__item__info'>
            <b className='cards__item__header'>{props.header}</b>
            <p className='cards__item__text'>Link: <a href= {props.link}>{props.link} </a></p>            
            <p className='cards__item__text'>{props.text}</p>
          </div>
      </li>
    </>
  );
}

export default ProjectCard;