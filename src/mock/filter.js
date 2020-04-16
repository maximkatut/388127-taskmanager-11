const filters = [
  {name: `all`, rule: () => true},
  {name: `overdue`, rule: (task) => task.dueDate instanceof Date && task.dueDate < Date.now()},
  {name: `today`, rule: (task) => task.dueDate instanceof Date && task.dueDate.getDate() === new Date().getDate()},
  {name: `favorites`, rule: (task) => task.isFavorite},
  {name: `repeating`, rule: (task) => Object.values(task.repeatingDays).some(Boolean)},
  {name: `archive`, rule: (task) => task.isArchive},
];

export const generateFilters = (tasks) => {
  return filters.map((filter) => {
    const count = tasks.reduce((acc, task) => {
      if (filter.rule(task)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return {
      title: filter.name,
      count,
      isChecked: Math.random() > 0.5,
    };
  });
};
