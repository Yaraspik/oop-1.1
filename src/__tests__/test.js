import Character from '../character';

test('create character Bowman or Daemon', () => {
  const character = new Character('Jack', 'Bowman');
  expect(character).toEqual(
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Bowman',
    },
  );
});

test('create character Swordsman or Undead', () => {
  const character = new Character('Jack', 'Swordsman');
  expect(character).toEqual(
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Swordsman',
    },
  );
});

test('create character Magician or Zombie', () => {
  const character = new Character('Jack', 'Zombie');
  expect(character).toEqual(
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Jack',
      type: 'Zombie',
    },
  );
});

test('create not available character', () => {
  function createCharacter() {
    return new Character('Jack', 'Pirat');
  }
  expect(createCharacter).toThrow('Недопустимое значение типа персонажа');
});

test('create character, name is not string', () => {
  function createCharacter() {
    return new Character(123, 'Bowman');
  }
  expect(createCharacter).toThrow('Значение имени должно быть строкой');
});

test('create character, name is short', () => {
  function createCharacter() {
    return new Character('1', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать меньше 2 символов');
});

test('create character, name is tall', () => {
  function createCharacter() {
    return new Character('superpupercharacter', 'Bowman');
  }
  expect(createCharacter).toThrow('Имя не может содержать больше 10 символов');
});

test('create character, type is not string', () => {
  function createCharacter() {
    return new Character('Miyagi', 123);
  }
  expect(createCharacter).toThrow('Значение типа персонажа должно быть строкой');
});
