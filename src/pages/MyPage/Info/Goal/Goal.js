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
        unit="%"
        total={total.goalSkeletalMuscleMass}
        value={data?.goalSkeletalMuscleMass}
      />

      <Bar
        label="체지방량"
        unit="%"
        total={total.goalBodyFat}
        value={data?.goalBodyFat}
      />
    </div>
  );
};

export default Goal;
