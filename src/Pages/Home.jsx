import React from 'react'
import './Home.css'
import dessertData from '../assets/data.js'
import Item from '../Components/Item/Item.jsx'
import Cart from '../Components/Cart/Cart.jsx'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-left">
          <h1>Desserts</h1>
          <div className="home-item">
            {dessertData.map((item, index) => {
              return <Item key={index} id ={item.id} image={item.image} category={item.category} name={item.name} price={item.price} />
            })}
          </div>
        </div>
        <div className="home-right">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Home
