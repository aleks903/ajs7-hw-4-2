import findBy from '../findBy.js';

test('Проверка по полю name', () => {
  const finder = findBy('name', 'урон');
  const massiv = [
    { name: 'маг', type: 'character' },
    { name: 'заклинание', type: 'attack' },
    { name: 'урон', type: 'help' },
  ].filter(finder);
  const expected = [{ name: 'урон', type: 'help' }];
  expect(massiv).toEqual(expected);
});

test('Проверка без результатов', () => {
  const finder = findBy();
  const expected = false;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});

test('Проверка по полю type', () => {
  const finder = findBy('type', 'character');
  const massiv = [
    { name: 'маг', type: 'character' },
    { name: 'заклинание', type: 'attack' },
    { name: 'урон', type: 'help' },
  ].filter(finder);
  const expected = [{ name: 'маг', type: 'character' }];
  expect(massiv).toEqual(expected);
});

test('Проверка type несколько результатов', () => {
  const massiv = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const finder = findBy('type', 'help');
  const received = massiv.filter(finder);
  const expected = [
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  expect(received).toEqual(expected);
});
