import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FeedAndRank from './FeedAndRank/FeedAndRank';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);

  const accessToken = localStorage.getItem('accessToken');
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = searchParams.get('limit');

  const setPaginationParams = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', (parseInt(page) + 1).toString());
    newSearchParams.set('limit', 10);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    fetchFeedList();
    // if (accessToken) {// 로그인 했을 때
    //   fetchFeedList();
    // } else { // 로그인하지 않은 상태에서는 토큰값 제외
    //   fetch(`/feeds?limit=${limit || 10}&page=${page}`, {
    //     method: 'GET',
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       const feedData = data.data;
    //       const newFeedData = feedData.feeds;
    //       setTotalCount(feedData.totalCount);
    //       setFeedList((prevFeedList) => {
    //         return {
    //           ...prevFeedList,
    //           feeds: [...(prevFeedList.feeds || []), ...newFeedData],
    //         };
    //       });
    //     });
    // }
  }, [page]);

  const fetchFeedList = () => {
    fetch(`data/communityData.json?limit=${limit || 10}&page=${page}`, {
      // /feeds?limit=${limit || 10}&page=${page}
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

  // 한 페이지에 표시되는 게시물 수
  const itemsPerPage = 10;

  // 마지막 페이지 계산
  const lastPage = Math.ceil(totalCount / itemsPerPage);

  // 현재 페이지
  const currentPage = parseInt(page) || 1;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 현재 페이지가 마지막 페이지보다 크면 동작 중지
      if (currentPage >= lastPage) {
        return;
      }

      if (
        window.innerHeight + scrollY >= document.body.offsetHeight &&
        feedList.feeds.length < totalCount &&
        feedList.feeds.length >= page * limit
      ) {
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
