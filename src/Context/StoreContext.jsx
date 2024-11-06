import { createContext, useState } from "react";
import Data from '.././assets/data.js'


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartitems, setCartitems] = useState({});
    const [popup, setPopup] = useState(false);

    const clearCartitemsHandler = ()=>{
        setCartitems({});
        setPopup(false)
    }

    const addToCart = (itemId) => {
        if (!cartitems[itemId]) {
            setCartitems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeCart = (itemId) => {
        if (itemId > 0) {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }
    }
    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = Data.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartitems[item]
            }
        }
        return totalAmount;
    }
    const getCartTotalCount = () => {
        let totalCount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                totalCount += cartitems[item];
            }
        }
        return totalCount;
    }

    const formatPrice = (price) => {
        return price.toFixed(2);
    }

    const contextvalue = {
        addToCart, cartitems, removeCart, getCartTotalAmount, formatPrice, getCartTotalCount, popup, setPopup, clearCartitemsHandler
    }


    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )

}



export default StoreContextProvider;