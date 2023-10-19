import React, { useState } from 'react';
import './PostAdd.scss';

const PostAdd = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    const newImages = [...images];
    const newPreviewImages = [...previewImages];
    const maxImages = 3;

    for (let i = 0; i < selectedImages.length; i++) {
      if (newImages.length < maxImages) {
        newImages.push(selectedImages[i]);
        const imageUrl = URL.createObjectURL(selectedImages[i]);
        newPreviewImages.push(imageUrl);
      } else {
        alert(`최대 3장까지 이미지를 등록할 수 있습니다.`);
        break;
      }
    }

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newPreviewImages = [...previewImages];

    newImages.splice(index, 1);
    newPreviewImages.splice(index, 1);

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleCancel = () => {};
  return (
    <div className="mainContainer">
      <div className="feedContainer">
        <div className="innerSection">
          <div className="titleSection">WEET YOU ?</div>
          <div className="prvSection">
            {previewImages.map((image, index) => (
              <div key={index} className="previewList">
                <img src={image} alt="preview 이미지없음" />
                <button
                  className="individualDeletion"
                  onClick={() => handleRemoveImage(index)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
          <form
            className="topSection"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="fileBox">
              <label for="chooseFile">💪 UPLOAD 3 PHOTOS! 🏋️‍♀️</label>
              <input
                type="file"
                id="chooseFile"
                multiple
                name="chooseFile"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </form>
          <section className="buttomSection">
            <div className="challengeCheck">
              <input type="checkbox" />
              <span>챌린지참여</span>
            </div>
            <div className="textSection">
              <textarea placeholder="피드를 작성해주세요." maxLength={100} />
            </div>
            <div className="buttonArea">
              <button onClick={handleCancel}>취소</button>
              <button>게시</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
