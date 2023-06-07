import React, { useState } from "react";
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleUpdateClick = () => {
        setCount(count + parseInt(inputValue));
        setInputValue('');
    }

    return (
        <div className="container">
            <div className="counter">
                <h1>счетчик: {count}</h1>
            </div>
            <div className="input-form">
                <input className="input" type="number" value={inputValue} onChange={handleInputChange} />
                <button className="counter__button" onClick={handleUpdateClick}>Обновить</button>
            </div>
            <div className="button-wrapper"></div>
        </div>
    );
}

export default Counter;