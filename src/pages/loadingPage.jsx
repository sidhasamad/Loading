import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts') // Dummy API
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setIsLoaded(true);
        });
    }, 2000); // simulate delay
  }, []);

  useEffect(() => {
    if (isLoaded) {
      navigate('/result', { state: data });
    }
  }, [isLoaded]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' ,marginLeft:'700px',color:'black'}}>
      <h2>Loading...</h2>
      <div className="spinner" />
      <style>{`
        .spinner {
          margin: 20px auto;
          width: 40px;
          height: 40px;
          border: 4px solid #ccc;
          border-top-color: #333;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
