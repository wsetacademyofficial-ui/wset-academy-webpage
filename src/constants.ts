import { WSETLevelData } from './types';

export const WSET_DATA: WSETLevelData[] = [
  {
    id: 1,
    title: "Level 1 Award in Wines",
    subtitle: "A beginner's guide to the world of wine.",
    learning: [
      {
        title: "The 4 Stages of Tasting",
        description: "Learn the Systematic Approach to Tasting (SAT): Appearance, Nose, Palate, and Conclusion. Level 1 focuses on simple observations like color intensity and primary aromas.",
        image: "./images/level1-tasting.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      },
      {
        title: "Main Types and Styles",
        description: "Understanding the difference between Still, Sparkling, and Fortified wines. Learn about white, rosé, and red wine production basics.",
        image: "./images/level1-styles.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      },
      {
        title: "Storage and Service",
        description: "The importance of correct temperature, glassware, and preserving wine quality after opening.",
        image: "./images/level1-service.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      }
    ],
    grapes: [
      {
        grape: "Chardonnay",
        climate: "Cool to Hot",
        acidity: "High to Med",
        tannins: "N/A",
        sweetness: "Dry",
        body: "Light to Full",
        flavour: "Apple, Citrus, Tropical",
        oak: "Often",
        characteristics: "Versatile, non-aromatic",
        aging: "Good potential"
      },
      {
        grape: "Pinot Noir",
        climate: "Cool to Moderate",
        acidity: "High",
        tannins: "Low to Med",
        sweetness: "Dry",
        body: "Light to Med",
        flavour: "Red fruit (Cherry, Strawberry)",
        oak: "Sometimes",
        characteristics: "Thin skin, delicate",
        aging: "Some potential"
      }
    ],
    regions: [
      {
        country: "France",
        region: "Bordeaux",
        grape: "Cabernet Sauvignon, Merlot",
        characteristics: "Structured, black fruit, cedar"
      },
      {
        country: "Italy",
        region: "Chianti",
        grape: "Sangiovese",
        characteristics: "High acid, sour cherry, herb"
      }
    ],
    flashcards: [
      { id: "1-1", question: "What is the primary factor in white wine color?", answer: "The grape variety and whether the wine has been aged in oak." },
      { id: "1-2", question: "What does 'Tannin' feel like on the palate?", answer: "A drying, mouth-coating sensation, similar to strong black tea." },
      { id: "1-3", question: "Name a common fortified wine.", answer: "Port or Sherry." }
    ],
    quiz: [
      {
        id: "q1-1",
        question: "Which of these is a common characteristic of a cool climate white wine?",
        options: ["High acidity, green fruit flavors", "Low acidity, tropical fruit flavors", "High alcohol, dried fruit flavors", "Deep gold color"],
        correctAnswer: 0,
        explanation: "Cool climates typically result in higher acidity and fresher, green fruit flavors like apple and pear."
      },
      {
        id: "q1-2",
        question: "What is the main difference between Champagne and Prosecco?",
        options: ["Prosecco is always sweet", "Champagne is made using the Traditional Method", "Prosecco is from France", "Champagne is always red"],
        correctAnswer: 1,
        explanation: "Champagne is produced using the Traditional Method (second fermentation in the bottle), while Prosecco usually uses the Tank Method."
      }
    ]
  },
  {
    id: 2,
    title: "Level 2 Award in Wines",
    subtitle: "Exploring the world's major grape varieties and regions.",
    learning: [
      {
        title: "Latitude and Climate",
        description: "Most vineyards are located between 30° and 50° latitude. Explore how altitude, ocean currents, and aspect influence grape ripening.",
        image: "./images/level2-climate.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      },
      {
        title: "The Noble Grapes",
        description: "Deep dive into Chardonnay, Pinot Noir, Cabernet Sauvignon, and Syrah. Understanding regional expressions from Burgundy to Napa.",
        image: "./images/level2-grapes.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      },
      {
        title: "Labeling Terminology",
        description: "Decoding European labels: AOC, DOCG, and Qualitätswein. Understanding what 'Reserva' or 'Classico' really means.",
        image: "./images/level2-labels.jpg" /* PLACEHOLDER FOR USER UPLOADED IMAGE */
      }
    ],
    grapes: [
      {
        grape: "Sauvignon Blanc",
        climate: "Cool to Moderate",
        acidity: "High",
        tannins: "N/A",
        sweetness: "Dry",
        body: "Light to Med",
        flavour: "Green fruit, Grass, Passion fruit",
        oak: "Rarely",
        characteristics: "Aromatic, high acid",
        aging: "Drink young"
      },
      {
        grape: "Syrah/Shiraz",
        climate: "Moderate to Hot",
        acidity: "Med to High",
        tannins: "Med to High",
        sweetness: "Dry",
        body: "Med to Full",
        flavour: "Black fruit, Pepper, Spice",
        oak: "Often",
        characteristics: "Deep color, spicy",
        aging: "High potential"
      }
    ],
    regions: [
      {
        country: "USA",
        region: "Napa Valley",
        grape: "Cabernet Sauvignon",
        characteristics: "Full body, ripe black fruit, oak"
      },
      {
        country: "Australia",
        region: "Barossa Valley",
        grape: "Shiraz",
        characteristics: "Full body, black fruit, chocolate"
      }
    ],
    flashcards: [
      { id: "2-1", question: "What is 'Chablis'?", answer: "A 100% Chardonnay wine from a cool climate region in northern Burgundy, known for high acidity and flinty notes." },
      { id: "2-2", question: "Describe the typical profile of Cabernet Sauvignon.", answer: "High tannin, high acidity, blackcurrant aromas, and often notes of cedar or tobacco from oak aging." },
      { id: "2-3", question: "What is the 'Puttonyos' scale used for?", answer: "Measuring the sweetness level of Tokaji Aszú dessert wines." }
    ],
    quiz: [
      {
        id: "q2-1",
        question: "Which region is famous for premium Pinot Noir and Chardonnay?",
        options: ["Bordeaux", "Burgundy", "Rioja", "Barossa Valley"],
        correctAnswer: 1,
        explanation: "Burgundy (Bourgogne) is the spiritual home of Pinot Noir and Chardonnay."
      },
      {
        id: "q2-2",
        question: "What does 'Botrytis Cinerea' (Noble Rot) require to develop?",
        options: ["Constant heavy rain", "Damp misty mornings followed by dry sunny afternoons", "Freezing temperatures", "High altitude and wind"],
        correctAnswer: 1,
        explanation: "Noble Rot needs humidity to grow and sun to evaporate water from the grapes, concentrating sugars and acids."
      }
    ]
  },
  {
    id: 3,
    title: "Level 3 Award in Wines",
    subtitle: "Advanced knowledge of viticulture and winemaking.",
    learning: [],
    grapes: [],
    regions: [],
    flashcards: [],
    quiz: []
  }
];
