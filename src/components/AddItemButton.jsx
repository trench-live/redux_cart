import React from 'react';

const AddItemButton = ({ onClick }) => {
    return (
        <button className="add-btn" onClick={onClick}>
            <span className="add-btn__icon">+</span>
            Добавить товар
        </button>
    );
};

export default AddItemButton;