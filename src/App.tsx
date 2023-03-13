
import './App.css';
import gamingImage from '../src/assets/images/gaming.png';
import CustomAppBar from './components/CustomAppBar';
import Landing from './pages/landing';
import React from 'react';
import Routes from './routes/routes';
import AuthContext, { AuthProvider } from './context/auth';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <AuthProvider>
        <Routes />
        </AuthProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
