import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  // const [loading, setLoading] = useState(true);
  const location=useLocation()
  const data=location.state

  return (
    <div style={{ marginTop: '100px', color: 'black' }}>
      <h1>API Result</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default ResultPage;
