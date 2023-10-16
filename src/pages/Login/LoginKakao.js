import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const LoginKakao = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  console.log('code : ', code);
  useEffect(() => {
    code &&
      fetch(`http://10.58.52.184:8000/auth/kakao/login?code=${code}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === 'LOGIN_SUCCESS') {
            navigate('/SignUp');
          }
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
  }, []);
  console.log(code);
  return <></>;
};

export default LoginKakao;
