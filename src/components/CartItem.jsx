import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <li className="cart-item">
            <span className="cart-item__name">{item.title}</span>
            <div className="cart-item__controls">
                <button
                    className={`cart-item__btn ${item.count === 1 ? 'cart-item__btn--warning' : ''}`}
                    onClick={() => dispatch(decrement(item.id))}
                >
                    -
                </button>
                <span className="cart-item__count">{item.count}</span>
                <button
                    className="cart-item__btn"
                    onClick={() => dispatch(increment(item.id))}
                    disabled={item.count >= 25}
                >
                    +
                </button>
            </div>
        </li>
    );
};

export default CartItem;