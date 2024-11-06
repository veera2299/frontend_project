import React, { useContext, useState } from 'react'
import './Cart.css'
import remove_icon from '../../assets/images/icon-remove-item.svg'
import carbon_icon from '../../assets/images/icon-carbon-neutral.svg'
import Data from '../../assets/data.js'
import { StoreContext } from '../../Context/StoreContext'
import illustration_img from '../../assets/images/illustration-empty-cart.svg'
import Popup from '../Popup/Popup.jsx'

const Cart = () => {
  const { cartitems, removeCart, getCartTotalAmount, formatPrice, getCartTotalCount, setPopup } = useContext(StoreContext);

  return (
    <div className='cart'>
      {getCartTotalAmount() !== 0 ?
        <>
          <div className="cart-details">
            <h2>Your Cart ({getCartTotalCount()})</h2>

            {Data.map((item, index) => {
              if (cartitems[item.id] > 0) {
                return <>
                  <div key={index} className="cart-quantity">
                    <div className="cart-quantity-items">
                      <p>{item.name}</p>
                      <small className='cart-quantity-items-count'>{cartitems[item.id]}x</small>
                      <small className='cart-quantity-items-price'>@ $ {formatPrice(item.price)}</small>
                      <small className='cart-quantity-items-total'>${formatPrice(cartitems[item.id] * item.price)}</small>
                    </div>
                    <div className="cart-remove-icon">
                      <img onClick={() => removeCart(item.id)} src={remove_icon} alt="" />
                    </div>
                  </div>
                  <hr />
                </>
              }
            })}
          </div>
          <div className="cart-total">
            <p className='cart-total-total'>Order Total</p>
            <p className='cart-total-total-price'>${formatPrice(getCartTotalAmount())}</p>
          </div>
          <div className="cart-carbon">
            <img src={carbon_icon} alt="" />
            <small>This is a <b>carbon-neutral</b> delivery</small>

          </div>
          <button onClick={()=>setPopup(true)}>Confirm Order</button>

        </>
        :
        <>
          <div className="cart-details">
            <h2>Your Cart ({getCartTotalCount()})</h2>
            <div className='cart-empty'>
              <img src={illustration_img} alt="" />
              <p>your added items will appear here</p>
            </div>
          </div>
        </>}
    </div>
  )
}

export default Cart
