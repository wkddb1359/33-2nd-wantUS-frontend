import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authorizationCode = location.search.split('=')[1];

  useEffect(() => {
    fetch(
      `http://10.58.2.54:8000/users/signin/kakao/callback?code=${authorizationCode}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        localStorage.setItem('token', result.token);
        navigate('/');
      });
  }, [authorizationCode]);
};

export default KakaoCallback;
