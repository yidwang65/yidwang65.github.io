import React from 'react'
import './Introduction.css';

function Introduction() {
  return (
    <>
        <div className="intro__wrapper">
            <div className='self_intro'>
            <p className='title'>About Me</p>
            <p className='text'>Hello, My name is Yida (August) Wang. 
                I am currently a junior studying computer science in Boston University.</p>
            </div>
            <div className='recent_news'>
            <p className='title'>Recent News</p>
            <p className='text'>In November, I will be participate in SC22 with the Boston University and Northeastern University student cluster team in person in Dallas, TX</p>
            <p className='text'>For Fall 2022, I will be teaching <a href='https://www.howchenn.com/teaching/fall2022'>CS200 Applied Algorithmic Problem Solving</a> with <a href='https://www.howchenn.com/'>Po Hao Chen</a></p>
            <p className='text'>I will be the treasurer of BUHPC for the coming year.</p>
            </div>
            </div>
    </>
  )
}

export default Introduction