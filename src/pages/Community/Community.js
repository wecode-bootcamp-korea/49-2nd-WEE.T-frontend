import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeedAndRank from './FeedAndRank/FeedAndRank';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(searchParams.get('limit'));
  const [page, setPage] = useState(searchParams.get('page'));
  const [totalCount, setTotalCount] = useState(0);

  // const limit = searchParams.get('limit');

  // const page = searchParams.get('page');

  // 두 번째 방법???? 그냥 샘플 -> useRef 사용방법 확인해보기
  // const limitRef = useRef(10);
  // limitRef.current = 20;

  //첫 번째 방법
  const setPaginationParams = () => {
    // limit = 10;
    setLimit(10);
    setPage(0);
    searchParams.set('page', page + 1);
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
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
        setPaginationParams();
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
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [feedList, totalCount, page, limit]);

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
