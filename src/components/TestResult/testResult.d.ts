interface TestData {
  countryCode: number;
  date: string;
  tonsCarbon: number;
  earth: number;
  carbonPercent: number;
  total: number;
  crop: number;
  graz: number;
  forest: number;
  fish: number;
  energy: number;
  built: number;
  food: number;
  housing: number;
  transport: number;
  goods: number;
  services: number;
}

interface TestInputData {
  country: number;
  source?: string;
  answers: Answer[];
}

interface Answer {
  questionid: number;
  value: number;
}
