import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const LoginNaver = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    code &&
      fetch(`http://10.58.52.96:8000/auth/naver/login?code=${code}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
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

export default LoginNaver;
