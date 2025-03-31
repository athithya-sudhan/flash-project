import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

interface HomeProps {
  isLoggedIn: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-8">
        <Brain className="h-16 w-16 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to FlashMaster
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Master any subject with our interactive flashcards
      </p>
      {isLoggedIn ? (
        <Link
          to="/categories"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700"
        >
          Start Learning
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700"
        >
          Get Started
        </Link>
      )}
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">10+ Categories</h3>
          <p className="text-gray-600">
            Choose from a wide range of subjects to study
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">3 Difficulty Levels</h3>
          <p className="text-gray-600">
            Progress from easy to hard as you learn
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">
            Monitor your learning journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;