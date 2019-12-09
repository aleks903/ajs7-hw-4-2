import findBy from './findBy.js';

const finder = findBy('name', 'урон');
const massiv = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

console.log(massiv.filter(finder));
