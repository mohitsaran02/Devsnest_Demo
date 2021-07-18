import React from 'react';
import "../components/CardBox.css"

const CardBox = (props) => {
    const {foodItem, calorie} = props;
    return (
        <div className="box">
            <div>{foodItem}</div>
            <p>You have consumed <strong>{calorie}</strong> calories today.</p>
            
        </div>
    );
}

export default CardBox;