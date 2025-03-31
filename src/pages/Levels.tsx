import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ArrowLeft } from 'lucide-react';

const Levels: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  const levels = [
    { id: 'easy', name: 'Easy', color: 'bg-green-500' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-500' },
    { id: 'hard', name: 'Hard', color: 'bg-red-500' }
  ];

  return (
    <div>
      <Link
        to="/categories"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Categories
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Link
            key={level.id}
            to={`/category/${categoryId}/${level.id}`}
            className="block"
          >
            <div className={`${level.color} rounded-lg p-8 text-white text-center hover:opacity-90 transition-opacity`}>
              <h3 className="text-2xl font-bold mb-2">{level.name}</h3>
              <p>Start the quiz</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Levels;