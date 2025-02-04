import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router';
import AxiosError from './components/AxiosError';
function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<AxiosError/>}/>
  </Routes>
    </>
  );
}

export default App;
