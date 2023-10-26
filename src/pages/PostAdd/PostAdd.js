import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_AWS_API } from '../../config';
import './PostAdd.scss';

const PostAdd = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(0);
  const [previewImage, setPreviewImage] = useState([]);

  const handleImageChange = (e) => {
    const selectImageList = e.target.files;
    const newImages = [...image];
    const newPreviewImages = [...previewImage];
    const maxImages = 3;
    for (let i = 0; i < selectImageList.length; i++) {
      if (newImages.length < maxImages) {
        newImages.push(selectImageList[i]);
        const previewImageUrl = URL.createObjectURL(selectImageList[i]);
        newPreviewImages.push(previewImageUrl);
      } else {
        alert('최대 3장까지 이미지를 등록 할 수있습니다.');
        break;
      }
    }
    setImage(newImages);
    setPreviewImage(newPreviewImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...image];
    newImages.splice(index, 1);
    const newPreviewImages = [...previewImage];
    newPreviewImages.splice(index, 1);

    setImage(newImages);
    setPreviewImage(newPreviewImages);
  };

  const handleChecked = () => {
    setIsChecked(isChecked === 0 ? 1 : 0);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCancel = () => {
    navigate('/community');
  };

  const accessToken = localStorage.getItem('accessToken');

  const handlePost = (e) => {
    e.preventDefault();

    const formDataArray = image.map((file) => {
      const formData = new FormData();
      formData.append('imageUrl', file);
      formData.append('content', text);
      !isEdit && formData.append('challenge', isChecked);
      return formData;
    });

    formDataArray.map((formData) => {
      fetch(`http://10.58.52.148:8000/feeds${isEdit ? `/${id}` : ''}`, {
        //${BASE_AWS_API}/feeds${isEdit ? `/${id}` : ''}
        method: isEdit ? 'PUT' : 'POST',
        headers: {
          // Authorization: accessToken,
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTgyOTg4OTksImV4cCI6MTY5ODM0MjA5OX0.4hHL317TLhDtHY_4L4HGt7HzbIiuq988QtRhHzUhFnw',
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === 'INSERT_SUCCESS') {
            const newImageUrl = result.imageUrl;
            setPreviewImage([...previewImage, newImageUrl]);
            navigate('/community');
          }
        });
    });
  };

  useEffect(() => {
    if (!isEdit || !id) return;
    fetch('${BASE_AWS_API}/feeds')
      .then((res) => res.json())
      .then(({ data }) => {
        const feedData = data.feeds.find((feed) => feed.id === id);
        const { imgUrl, content, challenge } = feedData;

        setImage(imgUrl.map(({ url }) => url));
        setText(content);
        setIsChecked(Number(challenge));
      });
  }, [isEdit, id]);

  return (
    <div className="mainContainer">
      <div className="feedContainer">
        <div className="innerSection">
          <div className="titleSection">WEET YOU ?</div>
          <div className="prvSection">
            {previewImage.map((image, index) => (
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
            encType="multipart/form-data"
            onSubmit={handlePost}
          >
            <div className="fileBox">
              <label for="chooseFile">💪 UPLOAD 3 PHOTOS! 🏋️‍♀️</label>
              <input
                type="file"
                id="chooseFile"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <section className="buttomSection">
              <div className="challengeCheck">
                <input
                  onChange={handleChecked}
                  type="checkbox"
                  checked={Boolean(isChecked)}
                />
                <span>챌린지참여</span>
              </div>
              <div className="textSection">
                <textarea
                  onChange={handleText}
                  placeholder="피드를 작성해주세요."
                  maxLength={100}
                  value={text}
                />
              </div>
              <div className="buttonArea">
                <button onClick={handleCancel}>취소</button>
                <button type="submit" onClick={handlePost}>
                  {isEdit ? '수정' : '작성'}
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
