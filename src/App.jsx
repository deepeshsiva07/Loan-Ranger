import  React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import GetStarted from './pages/GetStarted';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
    
    // Check if user has seen onboarding
    const onboardingShown = localStorage.getItem('onboardingShown');
    if (onboardingShown === 'true') {
      setShowOnboarding(false);
    }
  }, []);

  // Simulate login functionality
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  
  // Simulate logout functionality
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  
  // Mark onboarding as complete
  const completeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboardingShown', 'true');
  };

  return (
    <Routes>
      <Route path="/" element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
        {isLoggedIn && showOnboarding ? (
          <>
            <Route index element={<GetStarted onComplete={completeOnboarding} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="get-started" element={<GetStarted onComplete={completeOnboarding} />} />
          </>
        )}
        <Route path="login" element={<Login onLogin={handleLogin} />} />
        <Route path="register" element={<Register onRegister={handleLogin} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
 