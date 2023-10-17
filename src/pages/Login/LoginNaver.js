import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const LoginNaver = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    code &&
      fetch(`http://10.58.52.220:8000/auth/naver/login?code=${code}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === 'LOGIN_SUCCESS') {
            localStorage.setItem('accessToken', result.data.accessToken);
            localStorage.setItem('refreshToken', result.data.refreshToken);
            if (result.data.isNew) {
              navigate('/sign-up');
            } else {
              navigate('/');
            }
          } else {
            alert('오류입니다. 관리자에게 문의하세요.');
          }
        });
  }, []);
  return <></>;
};

export default LoginNaver;
