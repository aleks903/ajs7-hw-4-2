import findBy from '../findBy.js';

test('Проверка по полю name', () => {
  const finder = findBy('name', 'урон');
  const expected = true;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});

test('Проверка без результатов', () => {
  const finder = findBy();
  const expected = false;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});

test('Проверка по полю type', () => {
  const finder = findBy('type', 'character');
  const expected = true;
  const received = finder({ type: 'character' });
  expect(received).toBe(expected);
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
