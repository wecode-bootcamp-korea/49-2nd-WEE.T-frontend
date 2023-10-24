import React, { useEffect, useState, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import './KakaoMap.scss';

const { kakao } = window;

const KakaoMap = () => {
  const inputRef = useRef(null);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchKeyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });

          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  }, [map, searchKeyword]);

  return (
    <div className="kakaoMap">
      <div className="menu">
        <input ref={inputRef} className="searchInput" />
        <button
          className="searchButton"
          onClick={() => setSearchKeyword(inputRef.current?.value || '')}
        >
          검색
        </button>
        <ul />
      </div>
      <Map
        className="map"
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
