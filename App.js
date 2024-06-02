import { Routes, Route, Link } from 'react-router-dom';
import UslugiList from './pages/UslugiList';
import UslugiDisplay from "./pages/UslugiDisplay";

function App() {
  return (
    <>
      <header>
        <Link to="/">Главная</Link>
        <Link to="/uslugi">Услуги</Link>
        <Link to="/about">О нас</Link>
      </header>
      <Routes>
        <Route path="/" element={<div>Главная страница</div>} />
        <Route path="/uslugi" element={<UslugiList />} />
        <Route path="/uslugi/:id" element={<UslugiDisplay />} />
      </Routes>
    </>
  );
}

export default App;

