import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const LoginKakao = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  useEffect(() => {
    code &&
      fetch(`http://10.58.52.184:8000/auth/kakao/login?code=${code}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === 'LOGIN_SUCCESS') {
            if (result.data.isNew) {
              navigate('/SignUp');
            } else {
              localStorage.setItem(result.data.accessToken);
              localStorage.setItem(result.data.refreshToken);
              navigate('/');
            }
          } else {
            alert('오류입니다. 관리자에게 문의하세요.');
          }
        });
  }, []);
  return <></>;
};

export default LoginKakao;
