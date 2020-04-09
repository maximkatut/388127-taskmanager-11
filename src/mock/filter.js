import {tasks} from "../main.js";

const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const getOverdueFilterCount = () => {
  let counter = 0;
  tasks.forEach((it) => {
    if (it.dueDate instanceof Date && it.dueDate < Date.now()) {
      counter++;
    }
  });
  return counter;
};

const getTodayFilterCount = () => {
  let counter = 0;
  tasks.forEach((it) => {
    if (it.dueDate instanceof Date && it.dueDate.getDate() === new Date().getDate()) {
      counter++;
    }
  });
  return counter;
};

const getFavoriteFilterCount = () => {
  let counter = 0;
  tasks.forEach((it) => {
    if (it.isFavorite) {
      counter++;
    }
  });
  return counter;
};

const getRepeatingFilterCount = () => {
  let counter = 0;
  tasks.forEach((it) => {
    if (Object.values(it.repeatingDays).some(Boolean)) {
      counter++;
    }
  });
  return counter;
};

const getArchiveFilterCount = () => {
  let counter = 0;
  tasks.forEach((it) => {
    if (it.isArchive) {
      counter++;
    }
  });
  return counter;
};

export const generateFilters = () => {
  return filterNames.map((it, i) => {
    const filterCounts = [
      tasks.length,
      getOverdueFilterCount(),
      getTodayFilterCount(),
      getFavoriteFilterCount(),
      getRepeatingFilterCount(),
      getArchiveFilterCount(),
    ];
    return {
      title: it,
      count: filterCounts[i],
    };
  });
};
