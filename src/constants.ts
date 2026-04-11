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
"regions": [
    {
      "country": "France",
      "region": "Northern Rhône (Crozes-Hermitage, Hermitage, Côte Rôtie, Condrieu)",
      "grape": "Syrah, Viognier",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Bourgogne / Burgundy",
      "grape": "Pinot Noir, Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "South of France (Minervois)",
      "grape": "Syrah, Chardonnay, Grenache",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Beaujolais",
      "grape": "Gamay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Southern Rhône (Côtes du Rhône, Châteauneuf-du-Pape)",
      "grape": "Grenache",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Loire (Vouvray)",
      "grape": "Chenin Blanc",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Bordeaux (Sauternes)",
      "grape": "Sémillon",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Alsace",
      "grape": "Gewurztraminer",
      "characteristics": "Not specified in text"
    },
    {
      "country": "France",
      "region": "Champagne",
      "grape": "Chardonnay, Pinot Noir, Meunier",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Australia",
      "region": "South Eastern Australia",
      "grape": "Syrah / Shiraz, Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Australia",
      "region": "Barossa Valley",
      "grape": "Syrah / Shiraz, Grenache, Sémillon",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Australia",
      "region": "Hunter Valley",
      "grape": "Syrah / Shiraz, Sémillon",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Australia",
      "region": "Yarra Valley, Mornington Peninsula",
      "grape": "Pinot Noir",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Australia",
      "region": "McLaren Vale",
      "grape": "Grenache",
      "characteristics": "Not specified in text"
    },
    {
      "country": "USA",
      "region": "Sonoma, Carneros, Santa Barbara County, Oregon",
      "grape": "Pinot Noir, Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "USA",
      "region": "California, Napa Valley",
      "grape": "Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Chile",
      "region": "Casablanca Valley",
      "grape": "Pinot Noir, Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Chile",
      "region": "Central Valley",
      "grape": "Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "South Africa",
      "region": "Walker Bay",
      "grape": "Pinot Noir, Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "South Africa",
      "region": "Western Cape",
      "grape": "Chardonnay",
      "characteristics": "Not specified in text"
    },
    {
      "country": "South Africa",
      "region": "General",
      "grape": "Chenin Blanc",
      "characteristics": "Not specified in text"
    },
    {
      "country": "New Zealand",
      "region": "Martinborough, Marlborough, Central Otago",
      "grape": "Pinot Noir",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Spain",
      "region": "Rioja",
      "grape": "Grenache / Garnacha, Tempranillo",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Spain",
      "region": "Navarra, Priorat",
      "grape": "Grenache / Garnacha",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Spain",
      "region": "Ribera del Duero, Catalunya",
      "grape": "Tempranillo",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Spain",
      "region": "Rías Baixas",
      "grape": "Albariño",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Italy",
      "region": "Verdicchio dei Castelli di Jesi",
      "grape": "Verdicchio",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Italy",
      "region": "Gavi",
      "grape": "Cortese",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Italy",
      "region": "Soave",
      "grape": "Garganega",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Italy",
      "region": "Fiano di Avellino",
      "grape": "Fiano",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Italy",
      "region": "Asti, Prosecco",
      "grape": "Moscato, Glera",
      "characteristics": "Not specified in text"
    },
    {
      "country": "Hungary",
      "region": "Tokaj",
      "grape": "Furmint",
      "characteristics": "Not specified in text"
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
