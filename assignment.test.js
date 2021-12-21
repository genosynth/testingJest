const assignment = require('./assignment');
const caesarCipher = require('./caesarCipher'); 

test('adds 1 + 2 to equal 3', () => {
  expect(assignment.sum(1, 2)).toBe(3);
});

test('capitalizes 1st letter', () => {
    expect(assignment.capitalize('john')).toBe('John');
});

test('reverses string', () => {
  expect(assignment.reverseString('batman')).toBe('namtab');
  expect(assignment.reverseString('Ahh')).toBe('hhA');
});

test('calculator', () => {
  expect(assignment.calculator.addition(5,5)).toBe(10);
  expect(assignment.calculator.subtraction(5,5)).toBe(0);
  expect(assignment.calculator.division(10,2)).toBe(5);
  expect(assignment.calculator.multiplication(10,10)).toBe(100);
});

test('caesarCipher', () => {
  expect(caesarCipher(1,"aaaa")).toBe("bbbb");
  expect(caesarCipher(1,"zxy Wx")).toBe("ayz Xy");
  expect(caesarCipher(1,"a-A-b-B & C")).toBe("b-B-c-C & D");
  expect(caesarCipher(22,"Fu#k me, hard")).toBe("Bq#g ia, dwnz");
  expect(caesarCipher(12,"Ejja itfani mal-art baby.")).toBe("Qvvm ufrmzu ymx-mdf nmnk.");
});