import React, { useEffect, useRef } from 'react';
import Feed from './Feed/Feed';
import './FeedList.scss';

const FeedList = ({
  feedList,
  totalCount,
  page,
  limit,
  setPaginationParams,
  fetchFeedList,
}) => {
  const listRef = useRef(null);

  // 한 페이지에 표시되는 게시물 수
  const itemsPerPage = 10;

  // 마지막 페이지 계산
  const lastPage = Math.ceil(totalCount / itemsPerPage);

  // 현재 페이지
  const currentPage = parseInt(page) || 1;

  useEffect(() => {
    const { current } = listRef;

    if (!current) return;

    const handleScroll = () => {
      // 현재 페이지가 마지막 페이지보다 크면 동작 중지
      if (currentPage >= lastPage) {
        return;
      }

      if (
        current.scrollTop + current.offsetHeight + 2 > current.scrollHeight &&
        feedList.feeds.length < totalCount &&
        feedList.feeds.length >= page * limit
      ) {
        setPaginationParams();
      }
    };

    current.addEventListener('scroll', handleScroll);

    return () => {
      current.removeEventListener('scroll', handleScroll);
    };
  }, [feedList, totalCount, page]);

  return (
    <ul ref={listRef} className="feedList">
      {feedList.feeds?.map((feed) => (
        <Feed key={feed.id} getFeed={fetchFeedList} data={feed} />
      ))}
    </ul>
  );
};

export default FeedList;
