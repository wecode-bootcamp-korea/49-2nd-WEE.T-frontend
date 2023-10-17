import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeedAndRank from './FeedAndRank/FeedAndRank';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);

  // 두 번째 방법???? 그냥 샘플 -> useRef 사용방법 확인해보기
  // const limitRef = useRef(10);
  // limitRef.current = 20;

  const page = parseInt(searchParams.get('page')) || 1;
  const limit = searchParams.get('limit');

  //첫 번째 방법
  const setPaginationParams = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', (parseInt(page) + 1).toString());
    newSearchParams.set('limit', 10);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    fetchFeedList();
  }, [page]);

  const fetchFeedList = () => {
    fetch(`/data/communityData.json?limit=${limit || 10}&page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const feedData = data.data;
        const newFeedData = feedData.feeds;
        setTotalCount(feedData.totalCount);
        setFeedList((prevFeedList) => {
          return {
            ...prevFeedList,
            feeds: [...(prevFeedList.feeds || []), ...newFeedData],
          };
        });
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (
        window.innerHeight + scrollY >= document.body.offsetHeight &&
        feedList.feeds.length < totalCount &&
        feedList.feeds.length >= page * limit
      ) {
        console.log('scroll check');
        setPaginationParams();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [feedList, totalCount, page]);

  const initialLoad =
    !feedList || (feedList.feeds && feedList.feeds.length === 0);

  if (!initialLoad) {
    // 처음 로딩 시 10개의 데이터만 표시
    return (
      <div id="content" className="community">
        <div className="container sectionInner">
          <section className="challengeBanner">challenge banner 위치</section>
          <FeedAndRank feedList={feedList} totalCount={totalCount} />
        </div>
      </div>
    );
  }

  return null;
};

export default Community;
