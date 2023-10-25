import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PostAdd.scss';

const PostAdd = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(0);
  const [previewImage, setPreviewImage] = useState([]);

  const handleImageChange = (e) => {
    const selectImageList = e.target.files; //이벤트 발생시 받은 파일리스트(object)
    const newImages = [...image]; // image배열을 복제, newImages에 할당
    const newPreviewImages = [...previewImage]; //image배열을 복제, newPreviewImages에 할당
    const maxImages = 3; //최대이미지는 3장

    for (let i = 0; i < selectImageList.length; i++) {
      if (newImages.length < maxImages) {
        // 만일 newImages의 배열의 길이가 maxImages보다 작다면.(배열에 추가이미지를 허용하는 조건)
        newImages.push(selectImageList[i]);
        const previewImageUrl = URL.createObjectURL(selectImageList[i]); //미리보기가 가능하게 변수화
        newPreviewImages.push(previewImageUrl); // previewImage배열을 복사한 newPreviewImages에 추가
      } else {
        alert('최대 3장까지 이미지를 등록 할 수있습니다.');
        break;
      }
    }
    setImage(newImages); //setImage 함수가 실행, 복사된 newImages 의 배열을 사용, 이미지 상태업데이트.
    setPreviewImage(newPreviewImages); //setPreviewImage 함수가 실행, newPreviewImages 배열을 사용, previewImage 상태업데이트
    console.log(newImages);
  };

  const handleRemoveImage = (index) => {
    const newPreviewImages = [...previewImage]; //image배열을 복제, newPreviewImages에 할당
    newPreviewImages.splice(index, 1); //newPreviewImages배열에서 index위치에 있는 하나만 제거.

    setPreviewImage(newPreviewImages);
  };

  const handleChecked = () => {
    setIsChecked(isChecked === 0 ? 1 : 0); // setIsChecked호출하여 isChecked 변수의 값을 0일때1로, 1일때 0으로 변경.
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

    const formData = new FormData();
    formData.append('imageUrl', image);
    formData.append('content', text);
    !isEdit && formData.append('challenge', isChecked);

    fetch(`http://10.58.52.247:8000/feeds${isEdit ? `/${id}` : ''}`, {
      method: isEdit ? 'PUT' : 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        Authorization: accessToken,
        // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTcwNzMxNzAsImV4cCI6MTY5NzExNjM3MH0.f-YMfUS7Qrlh4d69kXzZxqUEI4lCLanQAWqQeYcoI3U',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'INSERT_SUCCESS') {
          alert('피드등록 완료!.');
          navigate('/community');
        }
      });
  };

  // useEffect(() => {
  //   if (!isEdit || !id) return;

  //   fetch('/feeds') // 특정Id값을 조회해서 get요청으로 불러오는 API X, 피드조회 API명세서를 이용해야함.
  //     .then((res) => res.json())
  //     .then(({ data }) => {
  //       const feedData = data.feeds.find((feed) => feed.id === id);
  //       const { imgUrl, content, challenge } = feedData;

  //       setImage(imgUrl.map(({ url }) => url));
  //       setText(content);
  //       setIsChecked(Number(challenge));
  //     });
  // }, [isEdit, id]);

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
