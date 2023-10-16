import React, { useState, useEffect } from 'react';
import FeedAndRank from './FeedAndRank/FeedAndRank';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});

  useEffect(() => {
    fetch('/data/communityData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const feedData = data.data;
        setFeedList(feedData);
      });
  }, []);

  const isEmpty = Object.keys(feedList).length > 0;

  if (!isEmpty) {
    return null;
  }

  return (
    <div id="content" className="community">
      <div className="container sectionInner">
        <section className="challengeBanner">challenge banner 위치</section>
        <FeedAndRank feedList={feedList} />
      </div>
    </div>
  );
};

export default Community;
