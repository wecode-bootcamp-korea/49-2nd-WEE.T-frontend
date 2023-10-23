import React from 'react';
import './DietContainer.scss';

const DietContainer = ({ dietData, mealTime, iconImg }) => {
  return (
    <div className="DietContainer">
      <h2 className="breakfastText timeText">
        <span className="iconTime">
          <img src={iconImg} />
        </span>
        &nbsp;
        {mealTime}
      </h2>
      <ul className="dietBoxWrapper">
        {dietData?.map((result) => (
          <li className="dietBox">
            <p className="imgBox">
              <img src={`${result.imageUrl}`} alt="식단1"></img>
            </p>
            <div className="dietInfo">
              <p className="nutrientName infoText">{result.nutrient}</p>
              <p className="foodName infoText">
                {result.name}
                <span className="gram">&nbsp;&nbsp;[{result.gram}g]</span>
              </p>
              <p className="foodCount infoText">
                {result.count.integer === 0 ? '' : result.count.integer}&nbsp;
                <span className="numerator">
                  {result.count.numerator === 0 ? '' : result.count.numerator}
                </span>
                <span className="denominator">
                  {result.count.denominator === 0
                    ? ''
                    : '/' + result.count.denominator}
                </span>
                개
              </p>
              <p className="foodInfo infoText">{result.information}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DietContainer;
