import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { CountryProvider } from './context/Context';

const App = () => {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
};
export default App;
