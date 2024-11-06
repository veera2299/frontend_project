import React, { useContext, useRef, useState } from 'react';
import './Item.css'
import addcart from '../../assets/images/icon-add-to-cart.svg'
import item_decre from '../../assets/images/icon-decrement-quantity.svg'
import item_incre from '../../assets/images/icon-increment-quantity.svg'
import { StoreContext } from '../../Context/StoreContext';


const Item = ({id, image, name, category, price }) => {

    const {cartitems, addToCart, removeCart, formatPrice} = useContext(StoreContext); 
    

     return (
        <div className='item'>
            <picture  className='item-image'>
                <source media='(min-width: 1024px)' srcSet={image.desktop} />
                <source media='(min-width: 768px)' srcSet={image.tablet} />
                <source media='(min-width: 480px)' srcSet={image.mobile} />
                {/* fallback */}
                <img  src={image.thumbnail} alt="" />
            </picture>
            <div className="item-cart-container">
                {!cartitems[id] ?
                    <div onClick={()=>addToCart(id)}  className="item-cart">
                        <img  src={addcart} alt="" />
                        <p>Add to Cart</p>
                    </div> 
                    :
                     <div className='item-cart-items'>
                        <img onClick={()=> removeCart(id)}  src={item_decre} alt="" />
                        <p>{cartitems[id]}</p>
                        <img  onClick={()=>addToCart(id)} src={item_incre} alt="" />
                    </div>
                }

            </div>  
            <div className="item-details">
                <p>{category}</p>
                <h4>{name}</h4>
                <p className='item-price'>${formatPrice(price)}</p>
            </div>

        </div>
    )
}

export default Item
