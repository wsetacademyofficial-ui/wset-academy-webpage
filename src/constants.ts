import { WSETLevelData } from './types';

export const WSET_DATA: WSETLevelData[] = [
  {
    id: 1,
    title: "Level 1 Award in Wines",
    subtitle: "A beginner's guide to the world of wine.",
    learning: [
      {
        title: "The Components of a Grape",
        description: "Skin: Provides colour and tannin. Pulp: Contains water, sugar, and acid.",
        image: "https://picsum.photos/seed/grapeskin/800/450"
      },
      {
        title: "Climate and Growing",
        description: "Climate (Cool or Warm) affects grape characteristics like sugar and acid levels. Key stages include flowering and grape ripening.",
        image: "https://picsum.photos/seed/vineyard/800/450"
      },
      {
        title: "The Winemaking Process",
        description: "Fermentation (sugar + yeast -> alcohol + CO2). White wine: pressing before fermentation. Red wine: fermentation before pressing. Rosé: short fermentation.",
        image: "https://picsum.photos/seed/winemaking/800/450"
      },
      {
        title: "Storage and Service",
        description: "Ideal storage: constant temp, away from light. Service temps: Well Chilled (Sparkling/Sweet), Chilled (Light Whites/Rosés), Room Temp (Full Reds).",
        image: "https://picsum.photos/seed/wineservice/800/450"
      },
      {
        title: "Food and Wine Interaction",
        description: "Food components like sweetness, umami, and salt affect how we perceive wine's acidity, bitterness, and fruitiness.",
        image: "https://picsum.photos/seed/winefood/800/450"
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
        characteristics: "White: Colour, Sweetness, Acidity, Body, Fruit Flavours, Oak",
        aging: "Good potential"
      },
      {
        grape: "Sauvignon Blanc",
        climate: "Cool to Moderate",
        acidity: "High",
        tannins: "N/A",
        sweetness: "Dry",
        body: "Light to Med",
        flavour: "Green fruit, Grass, Passion fruit",
        oak: "Rarely",
        characteristics: "White: Colour, Sweetness, Acidity, Body, Fruit Flavours, Oak",
        aging: "Drink young"
      },
      {
        grape: "Pinot Grigio",
        climate: "Cool to Moderate",
        acidity: "High",
        tannins: "N/A",
        sweetness: "Dry",
        body: "Light",
        flavour: "Pear, Lemon",
        oak: "Rarely",
        characteristics: "White: Colour, Sweetness, Acidity, Body, Fruit Flavours, Oak",
        aging: "Drink young"
      },
      {
        grape: "Riesling",
        climate: "Cool to Hot",
        acidity: "High",
        tannins: "N/A",
        sweetness: "Dry to Sweet",
        body: "Light to Full",
        flavour: "Floral, Lime, Petrol",
        oak: "Rarely",
        characteristics: "White: Colour, Sweetness, Acidity, Body, Fruit Flavours, Oak",
        aging: "Exceptional potential"
      },
      {
        grape: "Cabernet Sauvignon",
        climate: "Moderate to Hot",
        acidity: "High",
        tannins: "High",
        sweetness: "Dry",
        body: "Full",
        flavour: "Blackcurrant, Cedar",
        oak: "Often",
        characteristics: "Black: Colour, Tannin, Acidity, Body, Fruit Flavours, Oak",
        aging: "High potential"
      },
      {
        grape: "Merlot",
        climate: "Moderate to Hot",
        acidity: "Medium",
        tannins: "Medium",
        sweetness: "Dry",
        body: "Medium to Full",
        flavour: "Plum, Blackberry",
        oak: "Often",
        characteristics: "Black: Colour, Tannin, Acidity, Body, Fruit Flavours, Oak",
        aging: "Good potential"
      },
      {
        grape: "Pinot Noir",
        climate: "Cool to Moderate",
        acidity: "High",
        tannins: "Low to Med",
        sweetness: "Dry",
        body: "Light to Med",
        flavour: "Cherry, Strawberry",
        oak: "Sometimes",
        characteristics: "Black: Colour, Tannin, Acidity, Body, Fruit Flavours, Oak",
        aging: "Some potential"
      },
      {
        grape: "Syrah / Shiraz",
        climate: "Moderate to Hot",
        acidity: "Med to High",
        tannins: "Med to High",
        sweetness: "Dry",
        body: "Med to Full",
        flavour: "Black fruit, Pepper",
        oak: "Often",
        characteristics: "Black: Colour, Tannin, Acidity, Body, Fruit Flavours, Oak",
        aging: "High potential"
      }
    ],
    regions: [
      {
        country: "France",
        region: "Chablis",
        grape: "Chardonnay",
        characteristics: "White, Still (Dry)"
      },
      {
        country: "France",
        region: "Sancerre",
        grape: "Sauvignon Blanc",
        characteristics: "White, Still"
      },
      {
        country: "France",
        region: "Burgundy (White)",
        grape: "Chardonnay",
        characteristics: "White, Still"
      },
      {
        country: "France",
        region: "Sauternes",
        grape: "Sémillon/Sauvignon Blanc",
        characteristics: "White, Still (Sweet)"
      },
      {
        country: "France",
        region: "Burgundy (Red)",
        grape: "Pinot Noir",
        characteristics: "Red, Still"
      },
      {
        country: "France",
        region: "Bordeaux",
        grape: "Cabernet Sauvignon, Merlot",
        characteristics: "Red, Still"
      },
      {
        country: "France",
        region: "Beaujolais",
        grape: "Gamay",
        characteristics: "Red, Still"
      },
      {
        country: "France",
        region: "Côtes du Rhône",
        grape: "Grenache, Syrah",
        characteristics: "Red, Still"
      },
      {
        country: "France",
        region: "Châteauneuf-du-Pape",
        grape: "Grenache Blend",
        characteristics: "Red, Still"
      },
      {
        country: "France",
        region: "Champagne",
        grape: "Chardonnay, Pinot Noir",
        characteristics: "Sparkling, Sparkling"
      },
      {
        country: "USA",
        region: "White Zinfandel",
        grape: "Zinfandel",
        characteristics: "Rosé, Still"
      },
      {
        country: "Italy",
        region: "Chianti",
        grape: "Sangiovese",
        characteristics: "Red, Still"
      },
      {
        country: "Italy",
        region: "Prosecco",
        grape: "Glera",
        characteristics: "Sparkling, Sparkling"
      },
      {
        country: "Spain",
        region: "Rioja",
        grape: "Tempranillo",
        characteristics: "Red, Still"
      },
      {
        country: "Spain",
        region: "Cava",
        grape: "Local Varieties",
        characteristics: "Sparkling, Sparkling"
      },
      {
        country: "Spain",
        region: "Sherry",
        grape: "Palomino",
        characteristics: "Fortified, Fortified"
      },
      {
        country: "Portugal",
        region: "Port",
        grape: "Touriga Nacional Blend",
        characteristics: "Fortified, Fortified"
      }
    ],
    flashcards: [
    {
      "id": "1-1",
      "question": "What part of the grape provides colour and tannin?",
      "answer": "The skin."
    },
    {
      "id": "1-2",
      "question": "What are the three main components found in the pulp of a grape?",
      "answer": "Water, sugar, and acid."
    },
    {
      "id": "1-3",
      "question": "What are the two requirements for alcoholic fermentation?",
      "answer": "Sugar and yeast."
    },
    {
      "id": "1-4",
      "question": "What are the two main products of alcoholic fermentation?",
      "answer": "Alcohol and carbon dioxide."
    },
    {
      "id": "1-5",
      "question": "In white wine production, when does pressing typically occur?",
      "answer": "Before fermentation."
    },
    {
      "id": "1-6",
      "question": "In red wine production, when does pressing typically occur?",
      "answer": "After fermentation."
    },
    {
      "id": "1-7",
      "question": "How is the colour in rosé wine usually obtained?",
      "answer": "By draining the juice off the black grape skins after a short fermentation."
    },
    {
      "id": "1-8",
      "question": "What is the general effect of a cool climate on grape characteristics?",
      "answer": "Lower sugar and higher acidity."
    },
    {
      "id": "1-9",
      "question": "What is the general effect of a warm climate on grape characteristics?",
      "answer": "Higher sugar and lower acidity."
    },
    {
      "id": "1-10",
      "question": "Name the four principal white grape varieties listed in the WSET Level 1 curriculum.",
      "answer": "Chardonnay, Sauvignon Blanc, Pinot Grigio, and Riesling."
    },
    {
      "id": "1-11",
      "question": "Name the four principal black grape varieties listed in the WSET Level 1 curriculum.",
      "answer": "Cabernet Sauvignon, Merlot, Pinot Noir, and Syrah/Shiraz."
    },
    {
      "id": "1-12",
      "question": "What grape variety is used to produce Chablis?",
      "answer": "Chardonnay."
    },
    {
      "id": "1-13",
      "question": "Sancerre is a famous example of which white grape variety?",
      "answer": "Sauvignon Blanc."
    },
    {
      "id": "1-14",
      "question": "What are the two primary grapes used in Bordeaux red wines?",
      "answer": "Cabernet Sauvignon and Merlot."
    },
    {
      "id": "1-15",
      "question": "Which region is famous for red wines made from Pinot Noir?",
      "answer": "Burgundy (Bourgogne)."
    },
    {
      "id": "1-16",
      "question": "What is the primary black grape variety of the Barossa Valley in Australia?",
      "answer": "Shiraz (Syrah)."
    },
    {
      "id": "1-17",
      "question": "Marlborough in New Zealand is most famous for which grape variety?",
      "answer": "Sauvignon Blanc."
    },
    {
      "id": "1-18",
      "question": "What style of wine is Sauternes?",
      "answer": "A sweet white wine."
    },
    {
      "id": "1-19",
      "question": "Name two common examples of fortified wine.",
      "answer": "Sherry and Port."
    },
    {
      "id": "1-20",
      "question": "Name two examples of sparkling wine other than Champagne.",
      "answer": "Prosecco and Cava."
    },
    {
      "id": "1-21",
      "question": "What is the grape variety used for Beaujolais?",
      "answer": "Gamay."
    },
    {
      "id": "1-22",
      "question": "Which country is famous for the wine region of Chianti?",
      "answer": "Italy."
    },
    {
      "id": "1-23",
      "question": "What is the principal grape variety of Rioja?",
      "answer": "Tempranillo."
    },
    {
      "id": "1-24",
      "question": "Where is the region of Châteauneuf-du-Pape located?",
      "answer": "Southern Rhône, France."
    },
    {
      "id": "1-25",
      "question": "What are the three ideal conditions for storing wine?",
      "answer": "Constant temperature, away from strong light, and stored on its side (if corked)."
    },
    {
      "id": "1-26",
      "question": "What are the two main systems for preserving an open bottle of wine?",
      "answer": "Vacuum systems and blanket systems."
    },
    {
      "id": "1-27",
      "question": "What is the recommended service temperature for sparkling and sweet wines?",
      "answer": "Well chilled."
    },
    {
      "id": "1-28",
      "question": "How should a full-bodied red wine typically be served?",
      "answer": "At room temperature."
    },
    {
      "id": "1-29",
      "question": "How should a light-bodied red wine be served?",
      "answer": "Lightly chilled."
    },
    {
      "id": "1-30",
      "question": "How does sweetness in food affect the taste of wine?",
      "answer": "It makes the wine seem more bitter and acidic, and less fruity."
    },
    {
      "id": "1-31",
      "question": "How does umami in food affect the taste of wine?",
      "answer": "It increases the perception of bitterness and acidity, and decreases fruitiness."
    },
    {
      "id": "1-32",
      "question": "How does salt in food affect the taste of wine?",
      "answer": "It makes the wine seem less bitter/acidic and more fruity/full-bodied."
    },
    {
      "id": "1-33",
      "question": "How does acidity in food affect the taste of wine?",
      "answer": "It makes the wine seem less acidic and more fruity/sweet."
    },
    {
      "id": "1-34",
      "question": "What effect does chilli heat in food have on wine?",
      "answer": "It increases the perception of bitterness, acidity, and alcohol burn."
    },
    {
      "id": "1-35",
      "question": "What structural characteristic does oak typically add to a wine?",
      "answer": "Aromas and flavours like vanilla or smoke, and sometimes additional tannin."
    },
    {
      "id": "1-36",
      "question": "What is the main grape variety used in white Burgundy?",
      "answer": "Chardonnay."
    },
    {
      "id": "1-37",
      "question": "What is the primary white grape of the Loire Valley region of Sancerre?",
      "answer": "Sauvignon Blanc."
    },
    {
      "id": "1-38",
      "question": "What is the characteristic flavour of a wine made from the Syrah/Shiraz grape?",
      "answer": "Black fruit and spice (e.g., pepper)."
    },
    {
      "id": "1-39",
      "question": "Which grape variety is known for high acidity and being aromatic, often associated with Germany?",
      "answer": "Riesling."
    },
    {
      "id": "1-40",
      "question": "What is the primary characteristic of a 'full-bodied' wine?",
      "answer": "A heavier, more mouth-filling feel on the palate."
    }
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
    {
      "id": "2-1",
      "question": "What four factors in the vineyard affect the quality and style of the grapes?",
      "answer": "Sunlight, temperature, water, and nutrients."
    },
    {
      "id": "2-2",
      "question": "What is the latitude range north and south of the equator where most vineyards are located?",
      "answer": "30° to 50°."
    },
    {
      "id": "2-3",
      "question": "How does elevation affect the temperature in a vineyard?",
      "answer": "Temperature decreases with altitude; higher vineyards are cooler than those at sea level."
    },
    {
      "id": "2-4",
      "question": "What are the three main steps in the production of red wine?",
      "answer": "Crushing, fermentation (with skins), and pressing."
    },
    {
      "id": "2-5",
      "question": "What is the primary difference in the pressing stage between white and red winemaking?",
      "answer": "White grapes are pressed before fermentation, while red grapes are pressed after fermentation."
    },
    {
      "id": "2-6",
      "question": "What does 'malolactic conversion' do to the character of a wine?",
      "answer": "It lowers acidity and can add buttery or creamy flavours."
    },
    {
      "id": "2-7",
      "question": "What flavor characteristics does new oak maturation impart to a wine?",
      "answer": "Vanilla, coconut, smoke, and spice."
    },
    {
      "id": "2-8",
      "question": "What is the typical climate of Chablis, and what grape is grown there?",
      "answer": "Cool climate; Chardonnay."
    },
    {
      "id": "2-9",
      "question": "Name two prestigious GIs for Chardonnay in the Côte d’Or, France.",
      "answer": "Meursault and Puligny-Montrachet."
    },
    {
      "id": "2-10",
      "question": "Which New Zealand region is world-famous for Sauvignon Blanc?",
      "answer": "Marlborough."
    },
    {
      "id": "2-11",
      "question": "What are the typical characteristics of a Riesling from the Mosel region?",
      "answer": "Low alcohol, high acidity, and floral/green fruit notes, often with some sweetness."
    },
    {
      "id": "2-12",
      "question": "Which grape variety is the only one permitted for red wines in Gevrey-Chambertin?",
      "answer": "Pinot Noir."
    },
    {
      "id": "2-13",
      "question": "What are the two principal red grapes used in a red Bordeaux blend?",
      "answer": "Cabernet Sauvignon and Merlot."
    },
    {
      "id": "2-14",
      "question": "Which side of the Gironde estuary is dominated by Cabernet Sauvignon?",
      "answer": "The Left Bank (e.g., Médoc and Graves)."
    },
    {
      "id": "2-15",
      "question": "What region in Australia is highly regarded for its premium Cabernet Sauvignon?",
      "answer": "Coonawarra."
    },
    {
      "id": "2-16",
      "question": "What are the typical characteristics of Syrah from the Northern Rhône (e.g., Hermitage)?",
      "answer": "Full body, high tannins, black fruit, and notes of black pepper or meat."
    },
    {
      "id": "2-17",
      "question": "In which Australian region is Shiraz often produced in a very hot climate, resulting in high alcohol and chocolate notes?",
      "answer": "Barossa Valley."
    },
    {
      "id": "2-18",
      "question": "What is the principal grape of the Southern Rhône blend, such as in Châteauneuf-du-Pape?",
      "answer": "Grenache (Garnacha)."
    },
    {
      "id": "2-19",
      "question": "Which Spanish region is famous for producing premium Garnacha-based blends from old vines?",
      "answer": "Priorat."
    },
    {
      "id": "2-20",
      "question": "What is the primary grape used in the red wines of Rioja DOCa?",
      "answer": "Tempranillo."
    },
    {
      "id": "2-21",
      "question": "Which Italian grape is used to produce Barolo and Barbaresco?",
      "answer": "Nebbiolo."
    },
    {
      "id": "2-22",
      "question": "What is the main grape of Chianti Classico DOCG?",
      "answer": "Sangiovese."
    },
    {
      "id": "2-23",
      "question": "Which Italian grape is known for its high acidity, low tannins, and sour cherry flavours?",
      "answer": "Barbera."
    },
    {
      "id": "2-24",
      "question": "What is the main grape variety used in the production of Gavi DOCG?",
      "answer": "Cortese."
    },
    {
      "id": "2-25",
      "question": "What grape is used to produce Soave and Soave Classico?",
      "answer": "Garganega."
    },
    {
      "id": "2-26",
      "question": "Which Argentine region is most famous for Malbec?",
      "answer": "Mendoza."
    },
    {
      "id": "2-27",
      "question": "What is South Africa's signature black grape variety, a cross between Pinot Noir and Cinsault?",
      "answer": "Pinotage."
    },
    {
      "id": "2-28",
      "question": "Zinfandel is a signature red grape for which country?",
      "answer": "USA (California)."
    },
    {
      "id": "2-29",
      "question": "What are the two styles of Pinot Gris/Grigio?",
      "answer": "Pinot Grigio (light, neutral, high acid) and Pinot Gris (full-bodied, spicy, often from Alsace)."
    },
    {
      "id": "2-30",
      "question": "Which French region is famous for Chenin Blanc, producing it in dry, sweet, and sparkling styles?",
      "answer": "Vouvray."
    },
    {
      "id": "2-31",
      "question": "What grape is used in the Rías Baixas region of Spain?",
      "answer": "Albariño."
    },
    {
      "id": "2-32",
      "question": "Which grape is used to produce the famous sweet wines of Tokaj, Hungary?",
      "answer": "Furmint."
    },
    {
      "id": "2-33",
      "question": "What are the three main grapes used in the production of Champagne?",
      "answer": "Chardonnay, Pinot Noir, and Meunier."
    },
    {
      "id": "2-34",
      "question": "What is the 'Traditional Method' in sparkling wine production?",
      "answer": "A process where the second fermentation takes place in the bottle."
    },
    {
      "id": "2-35",
      "question": "What is 'disgorgement' in the context of Champagne production?",
      "answer": "The removal of the sediment (yeast) from the neck of the bottle."
    },
    {
      "id": "2-36",
      "question": "Which sparkling wine is produced in Italy using the 'Tank Method' (Martinotti/Charmat)?",
      "answer": "Prosecco."
    },
    {
      "id": "2-37",
      "question": "What is Asti DOCG made from?",
      "answer": "Moscato (Muscat)."
    },
    {
      "id": "2-38",
      "question": "What is the difference between Fino and Oloroso Sherry?",
      "answer": "Fino is aged under a layer of yeast called 'flor'; Oloroso is aged oxidatively without flor."
    },
    {
      "id": "2-39",
      "question": "Which fortified wine is produced in the Douro Valley of Portugal?",
      "answer": "Port."
    },
    {
      "id": "2-40",
      "question": "What is the difference between Ruby Port and Tawny Port?",
      "answer": "Ruby Port is fruity and aged briefly; Tawny Port is aged in wood to develop nutty, oxidative notes."
    },
    {
      "id": "2-41",
      "question": "At what stage of winemaking is spirit added to fortify Port?",
      "answer": "During fermentation (to kill the yeast and leave residual sugar)."
    },
    {
      "id": "2-42",
      "question": "What is the ideal long-term storage temperature for most wines?",
      "answer": "Between 10°C and 15°C."
    },
    {
      "id": "2-43",
      "question": "Why should wine with a cork be stored on its side?",
      "answer": "To keep the cork moist and prevent it from drying out/letting air in."
    },
    {
      "id": "2-44",
      "question": "What is the correct service temperature for a Sweet wine (e.g., Sauternes)?",
      "answer": "Well chilled (6–8°C)."
    },
    {
      "id": "2-45",
      "question": "How should a medium/full-bodied Oaky Chardonnay be served?",
      "answer": "Lightly chilled (10–13°C)."
    },
    {
      "id": "2-46",
      "question": "What is the standard procedure for opening a bottle of Sparkling wine safely?",
      "answer": "Keep a thumb on the cork at all times after the wire cage is loosened."
    },
    {
      "id": "2-47",
      "question": "In food and wine pairing, what effect does sugar in food have on a wine?",
      "answer": "It makes the wine seem less fruity and more acidic/bitter."
    },
    {
      "id": "2-48",
      "question": "In food and wine pairing, what effect does salt in food have on a wine?",
      "answer": "It makes the wine seem fruitier and less bitter/acidic."
    },
    {
      "id": "2-49",
      "question": "Which food component increases the perception of bitterness and alcohol burn in wine?",
      "answer": "Chilli heat (spiciness)."
    },
    {
      "id": "2-50",
      "question": "Which food component increases the perception of acidity in wine, making it taste flatter?",
      "answer": "Acidity (e.g., lemon juice or vinegar)."
    },
    {
      "id": "2-51",
      "question": "What is 'Umami' and how does it affect wine pairing?",
      "answer": "A savory taste (found in mushrooms/msg) that makes wine seem more bitter, acidic, and less fruity."
    },
    {
      "id": "2-52",
      "question": "Which region produces red wines from the Corvina grape using the appassimento method?",
      "answer": "Valpolicella (e.g., Amarone della Valpolicella)."
    },
    {
      "id": "2-53",
      "question": "What is the main grape used in the production of Beaujolais wines?",
      "answer": "Gamay."
    },
    {
      "id": "2-54",
      "question": "What are the common fruit flavors associated with cool-climate Chardonnay?",
      "answer": "Green fruit (apple, pear) and citrus (lemon)."
    },
    {
      "id": "2-55",
      "question": "What are the common fruit flavors associated with warm-climate Chardonnay?",
      "answer": "Stone fruit (peach) and tropical fruit (pineapple, banana)."
    },
    {
      "id": "2-56",
      "question": "Which French region is famous for producing dry, high-acid white wines from Sauvignon Blanc?",
      "answer": "The Loire Valley (Sancerre and Pouilly-Fumé)."
    },
    {
      "id": "2-57",
      "question": "What is the primary aroma profile of a Gewurztraminer wine?",
      "answer": "Intense floral (rose) and exotic fruit (lychee) notes."
    },
    {
      "id": "2-58",
      "question": "What does 'PGI' stand for in European wine law?",
      "answer": "Protected Geographical Indication."
    },
    {
      "id": "2-59",
      "question": "What is the difference between a 'Generic' GI and a 'Specific' GI?",
      "answer": "A generic GI covers a large area (e.g., Bordeaux), while a specific GI covers a smaller, more prestigious area (e.g., Pauillac)."
    },
    {
      "id": "2-60",
      "question": "What are the three ways to preserve a bottle of wine once it has been opened?",
      "answer": "Recorking/refrigeration, vacuum systems, and blanket systems (gas)."
    }
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
