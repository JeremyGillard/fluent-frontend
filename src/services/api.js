const terms = [
  {
    id: 0,
    term: 'hello',
    translation: 'bonjour',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 1,
    term: 'hi',
    translation: 'salut',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 2,
    term: 'where',
    translation: 'où',
    reviewed: true,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 1,
  },
  {
    id: 3,
    term: 'when',
    translation: 'quand',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 4,
    term: 'why',
    translation: 'pourquoi',
    reviewed: true,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 2,
  },
  {
    id: 5,
    term: 'what',
    translation: 'quoi',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 6,
    term: 'a job',
    translation: 'un travail',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 7,
    term: 'hello everyone',
    translation: 'bonjour tout le monde',
    reviewed: false,
    numberCorrectAnswer: 0,
    numberWrongAnswer: 0,
  },
  {
    id: 8,
    term: 'Vue is a framework more than a library like react',
    translation: "Vue est plutôt un framework qu'une librairie comme react",
    reviewed: true,
    numberCorrectAnswer: 3,
    numberWrongAnswer: 0,
  },
];

export function getTerms() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(terms);
    }, 500);
  });
}
