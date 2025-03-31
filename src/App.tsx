import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Levels from './pages/Levels';
import Quiz from './pages/Quiz';
import { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar isLoggedIn={!!user} onLogout={handleLogout} />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={!!user} />} />
            <Route 
              path="/login" 
              element={
                user ? <Navigate to="/categories" /> : <Login onLogin={handleLogin} />
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/categories" 
              element={
                user ? <Categories /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/category/:categoryId/levels" 
              element={
                user ? <Levels /> : <Navigate to="/login" />
              } 
            />
            <Route 
              path="/category/:categoryId/:difficulty" 
              element={
                user ? <Quiz /> : <Navigate to="/login" />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;