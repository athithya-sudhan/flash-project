export interface User {
  id: string;
  email: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';