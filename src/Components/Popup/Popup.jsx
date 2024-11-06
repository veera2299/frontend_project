import React, { useContext } from 'react'
import "./Popup.css"
import { StoreContext } from '../../Context/StoreContext'
import order_confirmed from '../../assets/images/icon-order-confirmed.svg'
import Data from '../../assets/data.js'

const Popup = () => {

    const { popup, cartitems, getCartTotalAmount, formatPrice, clearCartitemsHandler } = useContext(StoreContext);
    console.log(cartitems);

    return (
        <>
            {popup?
                <div className='popup'>
                    <div className='popup-container'>
                        <img src={order_confirmed} alt="" />
                        <h1>Order Confirmed</h1>
                        <small>We hope you enjoy your food!</small>
                        <div className="popup-details-container">
                            {Data.map((item, index) => {
                                if (cartitems[item.id] > 0) {
                                    return <div key={index} className="popup-details">
                                        <div className="popup-details-left">
                                            <img src={item.image.thumbnail} alt="" />
                                            <div className="popup-details-left-details">
                                                <h3>{item.name}</h3>
                                                <div className="popup-details-left-quantity">
                                                    <b>{cartitems[item.id]}x</b>
                                                    <p>@ ${formatPrice(item.price)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popup-details-right">
                                            <p>${formatPrice(cartitems[item.id] * item.price)}</p>
                                        </div>

                                    </div>
                                }
                            })}
                        </div>

                        <div className="popup-details-total">
                            <p>Order Total</p>
                            <b>${formatPrice(getCartTotalAmount())}</b>
                        </div>
                        <div className="popup-btn">
                            <button onClick={()=>clearCartitemsHandler()}>Start New Order</button>
                        </div>
                    </div>

                </div>
                : <></>}
        </>

    )
}

export default Popup
