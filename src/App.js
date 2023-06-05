// App.js
import { SpeechProvider } from './pages/admin'; // remplacer par le chemin vers votre fichier contenant SpeechContext
import Admin from './pages/admin';
import Home from './pages/index';

function App() {
  return (
    <SpeechProvider>
      <Admin />
      <Home />
    </SpeechProvider>
  );
}

export default App;