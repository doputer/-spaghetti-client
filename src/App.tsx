import { SignInPage } from 'pages/SignUpPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
