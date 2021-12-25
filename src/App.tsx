import { LobbyPage } from 'pages/LobbyPage';
import { MatchPage } from 'pages/MatchPage';
import { PlayerPage } from 'pages/PlayerPage';
import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SignUpPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PlayerPage />}>
        <Route path="" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="lobby" element={<LobbyPage />} />
        <Route path="match/:id" element={<MatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
