import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeedAndRank from './FeedAndRank/FeedAndRank';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const TOKEN = localStorage.getItem('accessToken');
  const HEADER = TOKEN
    ? { 'Content-Type': 'application/json', Authorization: TOKEN }
    : { 'Content-Type': 'application/json' };

  const setPaginationParams = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', (parseInt(page) + 1).toString());
    newSearchParams.set('limit', 10);
    setSearchParams(newSearchParams);
  };

  const page = parseInt(searchParams.get('page')) || 1;
  const limit = searchParams.get('limit') || 10;

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }

    searchParams.delete('page');
    searchParams.delete('limit');
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    fetchFeedList();
  }, [page, isMounted]);

  const fetchFeedList = () => {
    fetch(`/data/communityData.json?limit=${limit}&page=${page}`, {
      // http://10.58.52.236:8000/feeds?limit=${limit}&page=${page}
      // /data/communityData.json?limit=${limit}&page=${page}
      method: 'GET',
      headers: HEADER,
    })
      .then((res) => res.json())
      .then((data) => {
        const feedData = data.data;
        const newFeedData = feedData.feeds;
        setTotalCount(feedData.feedCount);
        setFeedList((prevFeedList) => {
          return {
            ...prevFeedList,
            feeds: [...(prevFeedList.feeds || []), ...newFeedData],
          };
        });
      });
  };

  const initialLoad = feedList.feeds && feedList.feeds.length === 0;

  if (!initialLoad) {
    return (
      <div id="content" className="community">
        <div className="container sectionInner">
          <section className="challengeBanner">challenge banner 위치</section>
          <FeedAndRank
            feedList={feedList}
            totalCount={totalCount}
            page={page}
            limit={limit}
            setPaginationParams={setPaginationParams}
            fetchFeedList={fetchFeedList}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default Community;
