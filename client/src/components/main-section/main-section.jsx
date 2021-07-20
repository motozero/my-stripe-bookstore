import React from 'react';
import { withRouter } from 'react-router-dom';
import bigScore from '../../assets/the-big-score.jpg';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={bigScore} alt='the big score'/>
        </div>
        <div className='ms-m-description'>
          <h2>The Big Score: The Billion-Dollar Story of Silicon Valley</h2>
          <p>Drawing on unvarnished interviews, Malone punctuates this history with incisive profiles of early luminaries, including William Shockley and Steve Jobs, when they were struggling entrepreneurs. With stories of ingenuity and individual sacrifice at its core, The Big Score is an indelible portrait of the high-agency spirit of early Silicon Valley.</p>
          <p><i>Michael S. Malone</i></p>
          <p><b>$24</b></p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/11')}>
            PREORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);