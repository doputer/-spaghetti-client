import { SignInPage } from 'pages/SignInPage';
import { SignUpPage } from 'pages/SignUpPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
