import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainMenu } from './components/MainMenu';
import { QuestPage } from './components/QuestPage';
import { ContactsPage } from './components/ContactInfoPage';

export function App() {
  const location = useLocation();

  const backgroundLocation =
    location.state?.backgroundLocation;

  return (
    <div className="min-h-screen bg-[#121212]">

      <Header />

      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<MainMenu />} />
        <Route path="/quests/:id" element={<QuestPage />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path="/contacts"
            element={<ContactsPage />}
          />
        </Routes>
      )}

      <Footer />

    </div>
  );
}

export default App;