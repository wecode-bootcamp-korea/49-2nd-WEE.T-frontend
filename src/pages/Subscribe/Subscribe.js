import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <section>
        <div className="sectionInner flexCenter">
          <h2>Subscribe</h2>
          <p>
            WEE.T를 구독하시고 트레이너의 맞춤 관리를 경험해보세요. 구독 중이신
            경우, 구독기간이 연장됩니다.
          </p>
        </div>
      </section>
      <section className="secondSection">
        <div className="sectionInner">
          <div className="subscribeContent">
            <ul className="flexCenter">
              <li>
                <div className="paymentWrap">
                  <div className="checkInputDiv">
                    <input
                      type="checkbox"
                      id="month1"
                      className="subscribeCheck"
                      value="1"
                    />
                    <label htmlFor="month1" />
                  </div>
                  <div className="paymentMonth">1개월</div>
                  <div className="paymentInfo">
                    전문 트레이너의 맞춤 관리를 합리적인 가격으로 이용할 수
                    있습니다.
                  </div>
                  <div className="paymentPlan">
                    <p>
                      <strong>400,000</strong>
                      <b>원</b>
                      <span>/ 월</span>
                    </p>
                    <span className="paymentOriginal">440,000 원</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="paymentWrap">
                  <div className="checkInputDiv">
                    <input
                      type="checkbox"
                      id="month2"
                      className="subscribeCheck"
                      value="2"
                    />
                    <label htmlFor="month2" />
                  </div>
                  <div className="paymentMonth">3개월</div>
                  <div className="paymentInfo">
                    전문 트레이너의 맞춤 관리를 합리적인 가격으로 이용할 수
                    있습니다.
                  </div>
                  <div className="paymentPlan">
                    <p>
                      <strong>350,000</strong>
                      <b>원</b>
                      <span>/ 월</span>
                    </p>
                    <span className="paymentOriginal">1,200,000 원</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="paymentWrap">
                  <div className="checkInputDiv">
                    <input
                      type="checkbox"
                      id="month3"
                      className="subscribeCheck"
                      value="3"
                    />
                    <label htmlFor="month3" />
                  </div>
                  <div className="paymentMonth">12개월</div>
                  <div className="paymentInfo">
                    전문 트레이너의 맞춤 관리를 합리적인 가격으로 이용할 수
                    있습니다.
                  </div>
                  <div className="paymentPlan">
                    <p>
                      <strong>300,000</strong>
                      <b>원</b>
                      <span>/ 월</span>
                    </p>
                    <span className="paymentOriginal">4,800,000 원</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="btnDiv">
        <button className="orderBtn" type="button">
          결제하기
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
