import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/startPage';
import LoadingPage from './pages/loadingPage';
import ResultPage from './pages/resultPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
