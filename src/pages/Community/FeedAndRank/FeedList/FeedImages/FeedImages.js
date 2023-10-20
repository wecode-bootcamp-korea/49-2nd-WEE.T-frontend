import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './FeedImages.scss';

const FeedImages = ({ feed }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      rewind={true}
    >
      {feed.imgurl?.map((image, index) => (
        <SwiperSlide className="feedImages" key={index}>
          <img src={image.url} alt={`feed ${index + 1}번째 이미지`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedImages;
