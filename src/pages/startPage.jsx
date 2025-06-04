import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/loading');
  };

  return (
    <div style={{  marginTop: '100px' ,marginLeft:'700px'}}>
      <button onClick={handleStart} style={{width:'150px',height:'50px'}}>Start</button>
    </div>
  );
};

export default StartPage;
