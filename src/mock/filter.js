import {tasks} from "../main.js";

const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const overdueExpression = (it) => {
  return it.dueDate instanceof Date && it.dueDate < Date.now();
};
const todayExpression = (it) => {
  return it.dueDate instanceof Date && it.dueDate.getDate() === new Date().getDate();
};
const favoriteExpression = (it) => {
  return it.isFavorite;
};
const repeatingExpression = (it) => {
  return Object.values(it.repeatingDays).some(Boolean);
};
const archiveExpression = (it) => {
  return it.isArchive;
};

const countFilter = (cb) => {
  let counter = 0;
  tasks.forEach((it) => {
    if (cb(it)) {
      counter++;
    }
  });
  return counter;
};

export const generateFilters = () => {
  return filterNames.map((it, i) => {
    const filterCounts = [
      tasks.length,
      countFilter(overdueExpression),
      countFilter(todayExpression),
      countFilter(favoriteExpression),
      countFilter(repeatingExpression),
      countFilter(archiveExpression),
    ];
    return {
      title: it,
      count: filterCounts[i],
    };
  });
};
