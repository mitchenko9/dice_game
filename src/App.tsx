import { Routes, Route } from 'react-router-dom';
import { Game } from './pages/Game';
import { Settings } from './pages/Settings';
import { DiceEdgesProvider } from './contexts/DiceEdgesContext';
import { SaveSettingsProvider } from './contexts/SaveSettingsContext';

function App() {
  return (
    <SaveSettingsProvider>
      <DiceEdgesProvider>
        <Routes>
          <Route path='*' element={<Game />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </DiceEdgesProvider>
    </SaveSettingsProvider>
  );
}

export default App;
