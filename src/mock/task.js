import {COLORS} from "../const.js";

const taskDescriptions = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const defaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomArrayItem = (array) => {
  return array[getRandomIntegerNumber(0, array.length)];
};

const getRandomIntegerNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);
  targetDate.setDate(targetDate.getDate() + diffValue);
  return targetDate;
};

const generateRepeatingDays = () => {
  const randomRepeatingDays = Object.assign({}, defaultRepeatingDays);
  for (const property in randomRepeatingDays) {
    if ({}.hasOwnProperty.call(randomRepeatingDays, property)) {
      randomRepeatingDays[property] = getRandomBoolean();
    }
  }
  return randomRepeatingDays;
};

export const generateTask = () => {
  const dueDate = getRandomBoolean() ? getRandomDate() : null;

  return {
    description: getRandomArrayItem(taskDescriptions),
    dueDate,
    repeatingDays: dueDate ? generateRepeatingDays() : defaultRepeatingDays,
    color: getRandomArrayItem(COLORS),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean(),
  };
};

export const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};
