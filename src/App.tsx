import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainMenu } from './components/MainMenu';
import { QuestPage } from './components/QuestPage';

export function App() {
  return (
    <div className="min-h-screen bg-[#121212]">

      <Header />

      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/quests/:id" element={<QuestPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;