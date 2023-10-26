import React from 'react';
import './Goal.scss';
import Bar from '../../../../components/Bar/Bar';

const Goal = (props) => {
  const { data, total } = props;
  return (
    <div className="goal">
      <h1 className="myGoal">회원님 목표</h1>
      <Bar
        label="목표체중"
        unit="kg"
        total={total.goalWeight}
        value={data?.goalWeight}
      />

      <Bar
        label="골격근량"
        unit={data?.goalSkeletalMuscleMass === null ? '' : '%'}
        total={total.goalSkeletalMuscleMass}
        value={
          data?.goalSkeletalMuscleMass === null
            ? '내 상태관리에서 업데이트 하세요.'
            : data?.goalSkeletalMuscleMass
        }
      />

      <Bar
        label="체지방량"
        unit={data?.goalBodyFat === null ? '' : '%'}
        total={total.goalBodyFat}
        value={
          data?.goalBodyFat === null
            ? '내 상태관리에서 업데이트 하세요.'
            : data?.goalBodyFat
        }
      />
    </div>
  );
};

export default Goal;
