// Snack 1

const racingBikes = [
  { name: "Specialized Tarmac", weight: 7.2 },
  { name: "Cannondale SuperSix EVO", weight: 7.0 },
  { name: "Trek Émonda", weight: 6.8 },
  { name: "BMC Teammachine", weight: 7.4 },
  { name: "Giant TCR Advanced", weight: 7.1 },
];

// Snack 2

const footballTeams = [
  { name: "Manchester United", points: 0, foulsCommitted: 0 },
  { name: "Real Madrid", points: 0, foulsCommitted: 0 },
  { name: "Paris Saint-Germain", points: 0, foulsCommitted: 0 },
  { name: "Bayern Munich", points: 0, foulsCommitted: 0 },
  { name: "Inter", points: 0, foulsCommitted: 0 },
];

const generateRandomNum = () => Math.floor(Math.random() * 100) + 1;

const newFootballTeams = footballTeams.map((ft) => ({
  ...ft,
  points: generateRandomNum(),
  foulsCommitted: generateRandomNum(),
}));

// Snack 3

const getSlicedArr = (arr, start, end) => arr.slice(start, end);

console.log(getSlicedArr(footballTeams, 1, 3));
