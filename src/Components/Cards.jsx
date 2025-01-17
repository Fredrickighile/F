import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Epic 
            Destinations!</h1>
        <div className="cards___container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/b.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon jungle"
                    label="Adventure"
                    path='/services'
                    />

                <CardItem
                    src="images/f.jpg"
                    text="Dive into the electrifying energy of Tokyo’s streets, where tradition meets modernity in a bustling cityscape. 😉"
                    label="City life"
                    path='/services'
                    />

<CardItem
                    src="images/h.jpg"
                    text="Witness the captivating beauty of a California sunset, where the vibrant hues of the sky blend perfectly with iconic silhouettes."
                    label="City life"
                    path='/services'
                    />


<CardItem
                    src="images/i.jpg"
                    text="Experience the breathtaking beauty of endless golden sands, where time slows down and nature’s tranquility reigns supreme."
                    label="City life"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
