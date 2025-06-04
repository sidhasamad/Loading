import { useEffect, useState } from 'react';

const ResultPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dummy API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{  marginTop: '100px' ,color:'black',}}>
      <h1>API Result</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : data ? (
        <pre>{JSON.stringify(data,null,2)}</pre>
      ) : (
        <p>Failed to load data.</p>
      )}
    </div>
  );
};

export default ResultPage;
