import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store';
import CartItem from './CartItem';
import AddItemButton from './AddItemButton';
import EmptyCart from './EmptyCart';

const Cart = () => {
    const items = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <h1 className="cart__title">Корзина</h1>

            <AddItemButton onClick={() => dispatch(addItem())} />

            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <ul className="cart__list">
                    {items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;