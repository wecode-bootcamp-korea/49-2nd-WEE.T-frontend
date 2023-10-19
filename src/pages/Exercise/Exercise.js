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
              <span className="carbonhydrate nutrientNum">
                52<span className="fontSizeThin">g</span>
              </span>
            </p>
            <p className="protein NutrientCircle">
              <span className="nutrientText">단백질</span>
              <span className="protein nutrientNum">
                60<span className="fontSizeThin">g</span>
              </span>
            </p>
            <p className="fat NutrientCircle">
              <span className="nutrientText">지방</span>
              <span className="fat nutrientNum">
                20<span className="fontSizeThin">g</span>
              </span>
            </p>
          </div>
        </div>
        <div className="dietContentWrapper">
          <div className="todayDietContainer">
            <h1 className="todayText">
              &nbsp; &nbsp; 김세연님 오늘의 식단&nbsp; &nbsp;
            </h1>
            <div className="breakfastContainer">
              <h2 className="breakfastText timeText">아침 추천 식단</h2>
              <ul className="dietBoxWrapper">
                <li className="dietBox">
                  <p className="imgBox">
                    <img src="/images/banana.jpg" alt="식단1"></img>
                  </p>
                  <div className="dietInfo">
                    <p className="nutrientName infoText">탄수화물</p>
                    <p className="foodName infoText">
                      바나나<span className="gram">&nbsp;&nbsp;[56g]</span>
                    </p>
                    <p className="foodCount infoText">
                      1&nbsp;<span className="numerator">1</span>&#47;
                      <span className="denominator">4</span>개
                    </p>
                    <p className="foodInfo infoText">
                      바나나는 식이섬유가 풍부하여 변비에 효과적인 식품입니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exercise;
