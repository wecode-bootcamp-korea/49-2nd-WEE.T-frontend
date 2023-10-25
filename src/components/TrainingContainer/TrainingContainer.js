import React from 'react';
import './TrainingContainer.scss';

const TrainingContainer = ({ trainingData, exerciseArea, iconImg }) => {
  const containerStyle = {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <div className="TrainingContainer">
      <h2 className="areaText">
        <span className="iconTime">
          <img src={iconImg} />
        </span>
        &nbsp;
        {exerciseArea}
      </h2>
      <ul className="dietBoxWrapper">
        {trainingData?.map((result, index) => (
          <li key={index} className="dietBox">
            <div className="imgBox" style={containerStyle}>
              <div className="embed-container">
                <iframe
                  src={'https://www.youtube.com/embed/F60RVDh7iis'}
                  allowFullScreen
                  style={iframeStyle}
                ></iframe>
              </div>
            </div>
            <div className="dietInfo">
              <p className="infoText">{result.name}</p>
              <p className="foodName infoText">
                <span className="gram">{result.content}</span>
              </p>
              <p className="trainingCount infoText">{result.count}번</p>
              <p className="foodInfo infoText">{result.set}SET</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingContainer;
