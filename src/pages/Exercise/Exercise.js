import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Exercise.scss';

const Exercise = () => {
  return (
    <div className="Exercise">
      <section className="sectionInner">
        <h2 className="pageLogo">
          <img src="/images/icon-exercise.png" alt="운동법 아이콘" />
        </h2>
        <h1 className="pageText">위트 맞춤 추천 식단</h1>
        <p className="subText">
          '위트'에서 고객 건강 정보를 바탕으로 제공하는 식단 정보입니다.
        </p>
        <div className="userDietInfo">
          <div className="userNotice">
            <p className="badge">
              <img src="/images/icon-bread.png" alt="빵 아이콘" />
            </p>
            <span className="userNickname">김세연</span>
            님의 하루 섭취 권장 칼로리는
            <span className="userCal"> 1600cal </span>
            입니다.
          </div>
          <div className="userNutrient">
            <p className="NutrientCircle">
              <span className="nutrientText">탄수화물</span>
              <span className="carbonhydrate nutrientNum">52g</span>
            </p>
            <p className="protein NutrientCircle">
              <span className="nutrientText">단백질</span>
              <span className="protein nutrientNum">60g</span>
            </p>
            <p className="fat NutrientCircle">
              <span className="nutrientText">지방</span>
              <span className="fat nutrientNum">20g</span>
            </p>
          </div>
        </div>
        <div className="dietContentWrapper">
          <div className="todayDietContainer">
            <h1 className="todayText">Today Diet</h1>
            <h2>아침 추천 식단</h2>
            <ul className="breakfastBox">
              <li>
                <p className="imgBox">
                  <img src="/images/logo.png" alt="식단1"></img>
                </p>
                <div className="DietInfo">
                  <p className="foodName">바나나</p>
                  <p className="foodCount">
                    1개<span className="numerator">1</span>/
                    <span className="denominator">4</span>
                    <span className="gram">56g</span>
                  </p>
                </div>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercise;
