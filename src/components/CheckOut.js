import React from 'react'
import { useCart } from '../context/CartContext'

function CheckOut() {
    const { cart } = useCart()
    console.log(cart);
    return (
        <div>CheckOut</div>
    )
}

export default CheckOut