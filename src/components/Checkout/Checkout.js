import React, { useContext } from 'react';
import { cartContext } from '../../App';
import SingleItem from './SingleItem';

const Checkout = () => {
    const [cart, setCart] = useContext(cartContext);
    console.log(cart)
    return (
        <div className="flex overflow-hidden flex-wrap justify-around gap-2 p-6">
            {
                cart?.map(item => <SingleItem key={item.idMeal} item={item}></SingleItem>)
            }
        </div>
    );
};

export default Checkout;