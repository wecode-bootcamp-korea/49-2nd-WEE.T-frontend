import React, { useEffect, useState } from 'react';
// import { Redirect } from 'react-router-dom';
import './Subscribe.scss';

const Subscribe = () => {
  const [subscribeStatus, setSubscribeStatusStatus] = useState(0); //구독하지 않은 상태 기본값
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  // useEffect(() => {
  //   // 토큰이 있다면 사용자 정보를 가져오는 함수 호출
  //   if (TOKEN) {
  //     getUserSubscribeData();
  //   }
  // }, [TOKEN]);

  const getUserSubscribeData = () => {
    fetch('ENDPOINT/subscription', {
      headers: {
        'Content-Type': 'application/json',
        // authorization: "토큰"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 1) {
          // 구독한 상태이면,
          // setSubscribeStatusStatus(1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkboxOptions = [
    { subscribeId: 1, name: '1개월', subscribe: 1, price: 4900 },
    { subscribeId: 2, name: '3개월', subscribe: 3, price: 12900 },
    { subscribeId: 3, name: '12개월', subscribe: 12, price: 45900 },
  ];

  const handleCheckboxChange = (option) => {
    setSelectedCheckbox(option);
  };

  const handleOrderButton = () => {
    if (selectedCheckbox) {
      if (subscribeStatus === 1) {
        const isExtend = window.confirm(
          '이미 구독한 상태입니다. 계속 진행하시면 구독 기간이 연장됩니다. 계속하시겠습니까?',
        );

        if (!isExtend) {
          return;
        }
      }

      // 서버로 데이터 보내기
      fetch('ENDPOINT/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // authorization: "토큰"
        },
        body: JSON.stringify({
          subscribeId: selectedCheckbox.subscribeId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // 결제 성공 시 구독 상태 업데이트
          setSubscribeStatusStatus(1);
        })
        .catch((error) => {
          console.log(error);
        });

      setSelectedCheckbox(null);
    } else {
      console.log('구독하실 개월 수를 선택해주세요.');
    }
  };

  // 사용자가 로그인하지 않았다면 로그인 페이지로 리다이렉션
  // if (!TOKEN) {
  //   return <Redirect to="/login" />;
  // }

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
          <form className="subscribeContent">
            <ul className="flexCenter">
              {checkboxOptions.map((option) => (
                <li key={option.subscribeId}>
                  <div className="paymentWrap">
                    <div className="checkInputDiv">
                      <input
                        type="checkbox"
                        id={option.subscribeId}
                        className="subscribeCheck"
                        checked={
                          selectedCheckbox
                            ? selectedCheckbox.subscribeId ===
                              option.subscribeId
                            : false
                        }
                        onChange={() => handleCheckboxChange(option)}
                      />
                      <label htmlFor={option.subscribeId} />
                    </div>
                    <div className="paymentMonth">{`${option.subscribe}개월`}</div>
                    <div className="paymentInfo">
                      전문 트레이너의 맞춤 관리를 합리적인 가격으로 이용할 수
                      있습니다.
                    </div>
                    <div className="paymentPlan">
                      <p>
                        <strong>{option.price.toLocaleString()}</strong>
                        <b>원</b>
                        <span>/ 월</span>
                      </p>
                      <span className="paymentOriginal">{`${(
                        option.price * 2
                      ).toLocaleString()} 원`}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="btnDiv">
              <button
                className="orderBtn"
                type="button"
                onClick={handleOrderButton}
              >
                결제하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
