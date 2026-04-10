export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface LearningContent {
  title: string;
  description: string;
  image: string;
}

export interface GrapeInfo {
  grape: string;
  climate: string;
  acidity: string;
  tannins: string;
  sweetness: string;
  body: string;
  flavour: string;
  oak: string;
  characteristics: string;
  aging: string;
}

export interface RegionInfo {
  country: string;
  region: string;
  grape: string;
  characteristics: string;
}

export interface WSETLevelData {
  id: number;
  title: string;
  subtitle: string;
  learning: LearningContent[];
  grapes?: GrapeInfo[];
  regions?: RegionInfo[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
}
