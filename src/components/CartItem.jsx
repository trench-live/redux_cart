import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <li className="cart-item">
            <span className="cart-item_name">{item.title}</span>
            <div className="cart-item_controls">
                <button
                    className={`cart-item_btn ${item.count === 1 ? 'cart-item_btn--warning' : ''}`}
                    onClick={() => dispatch(decrement(item.id))}
                >
                    -
                </button>
                <span className="cart-item_count">{item.count}</span>
                <button
                    className="cart-item_btn"
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