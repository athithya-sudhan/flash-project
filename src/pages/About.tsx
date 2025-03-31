import React from 'react';
import { Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <Brain className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About FlashMaster</h1>
        <p className="text-xl text-gray-600">
          Your ultimate learning companion for mastering any subject
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          FlashMaster is dedicated to making learning accessible, engaging, and effective for everyone. 
          We believe that the key to mastering any subject lies in active recall and spaced repetition, 
          which is why we've created this interactive flashcard platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Why FlashMaster?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Comprehensive subject coverage</li>
            <li>• Adaptive difficulty levels</li>
            <li>• Progress tracking</li>
            <li>• Interactive learning experience</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 10+ subject categories</li>
            <li>• Three difficulty levels</li>
            <li>• Detailed explanations</li>
            <li>• User-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;