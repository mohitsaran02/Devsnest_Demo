import React from 'react';
import "../components/Cards.css";
import CardBox from './CardBox.jsx';

const calorieArr = [
    {
      foodItem: "Pizza",
      calorie: 56
    },
    {
      foodItem: "Burger",
      calorie: 56
    },
    {
      foodItem: "Coke",
      calorie: 56
    },
    {
      foodItem: "Brownie",
      calorie: 56
    },
    {
      foodItem: "Fried Rice",
      calorie: 56
    },
    {
      foodItem: "Lassania",
      calorie: 56
    },
    {
      foodItem: "Pani Puri",
      calorie: 56
    }
];

const Cards = () => {
    return (
      <div>
      <h2>Calorie Read Only</h2>
      <div className="page">
        <div className="container">
          {
            calorieArr.map(elem=>( 
                <CardBox foodItem={elem.foodItem} calorie={elem.calorie} />          
            ))
          }

        </div>
      </div>
      </div>
    );
  };

export default Cards;