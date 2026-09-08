import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainMenu } from './components/MainMenu';

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;