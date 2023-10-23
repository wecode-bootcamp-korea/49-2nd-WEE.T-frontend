import React from 'react';
import './Current.scss';
import Bar from '../../../../components/Bar/Bar';

const Current = (props) => {
  const { data, total } = props;
  return (
    <div className="current">
      <h1 className="ing">회원님 현재상태</h1>
      <Bar
        label="나의 뱃지 Level"
        unit="Level"
        total={total.badgeLevel}
        value={data?.badgeLevel}
      />

      <Bar label="키" unit="cm" total={total.height} value={data?.height} />

      <Bar
        label="현재체중"
        unit="kg"
        total={total.weight}
        value={data?.weight}
      />

      <Bar
        label="골격근량"
        unit="%"
        total={total.skeletalMuscleMass}
        value={data?.skeletalMuscleMass}
      />

      <Bar
        label="체지방량"
        unit="%"
        total={total.bodyFat}
        value={data?.bodyFat}
      />
    </div>
  );
};

export default Current;
