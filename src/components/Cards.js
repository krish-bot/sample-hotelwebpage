import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards' id='menu'>
      <h1>Welcome to KP's Multi-Cuisine Restaurant! </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Samosa, the great Mughals came to India with an array of culinary techniques. But the samosa remained popular.'
              path='/menu'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Panner Curry, the spicy and tasty recipe with the bunch of ingradients'
              path='/menu'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Rice with Chicken curry, that was a pleasure this combo was perfectly bliss'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Butter naan with prawn roast, prawn is one of the tastiest seafood in the world'
              path='/menu'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Vadapav, A road side receipe turns into star hotel main dish'
              path='/menu'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Panner roast with papaya, a healthy and tasty food for weight gainer and children'
              path='/menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;