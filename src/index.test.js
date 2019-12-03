import findBy from './app.js';

test('Проверка findBy true', () => {
  const finder = findBy('name', 'урон');
  const expected = true;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});

test('Проверка findBy false', () => {
  const finder = findBy();
  const expected = false;
  const received = finder({ name: 'урон' });
  expect(received).toBe(expected);
});
