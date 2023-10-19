import React from 'react';
import './PostAdd.scss';

const PostAdd = () => {
  return (
    <div className="mainContainer">
      <div className="feedContainer">
        <div className="innerSection">
          <div className="titleSection">WEET YOU ?</div>
          <form
            className="topSection"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="fileBox">
              <label for="chooseFile">💪 Upload Photo! 🏋️‍♀️</label>
              <input
                type="file"
                id="chooseFile"
                multiple
                name="chooseFile"
                accept="image/*"
              />
            </div>
          </form>
          <section className="buttomSection">
            <div className="challengeCheck">
              <input type="checkbox" />
              <span>챌린지참여</span>
            </div>
            <div className="textSection">
              <textarea placeholder="피드를 작성해주세요." />
            </div>
            <div className="buttonArea">
              <button>취소</button>
              <button>게시</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
