import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostAdd.scss';

const PostAdd = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isChecked, setIsChecked] = useState(0);
  const [postContent, setPostContent] = useState({
    imageUrl: [],
    content: '',
    challenge: '',
  });

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    if (selectedImages.length === 0) {
      alert('이미지를 선택하세요');
      return;
    }
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

    console.log(newImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newPreviewImages = [...previewImages];

    newImages.splice(index, 1);
    newPreviewImages.splice(index, 1);

    setImages(newImages);
    setPreviewImages(newPreviewImages);
  };

  const handleChecked = () => {
    setIsChecked(isChecked === 0 ? 1 : 0);
    setPostContent({
      ...postContent,
      challenge: isChecked === 0 ? 1 : 0,
    });
    console.log(postContent);
  };

  const handleText = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
    console.log(postContent);
  };

  const handleCancel = () => {
    navigate('/community');
  };

  const handlePost = () => {
    fetch('http://10.58.52.247:8000/feeds', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        //'application/json;charset=utf-8'
        //Authorization: "accessToken",
        // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTcwNzMxNzAsImV4cCI6MTY5NzExNjM3MH0.f-YMfUS7Qrlh4d69kXzZxqUEI4lCLanQAWqQeYcoI3U',
      },
      body: JSON.stringify({
        imageUrl: image,
        content: postContent.content,
        challenge: postContent.challenge,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === 'INSERT_SUCCESS') {
          alert('피드등록 완료!.');
          navigate('/community');
        }
      });
  };

  // console.log(previewImages);
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
                name="imageUrl"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </form>
          <section className="buttomSection">
            <div className="challengeCheck">
              <input onChange={handleChecked} type="checkbox" />
              <span>챌린지참여</span>
            </div>
            <div className="textSection">
              <textarea
                onChange={handleText}
                placeholder="피드를 작성해주세요."
                maxLength={100}
                name="content"
              />
            </div>
            <div className="buttonArea">
              <button onClick={handleCancel}>취소</button>
              <button onClick={handlePost}>작성</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
