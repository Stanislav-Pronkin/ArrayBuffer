import getBuffer from '../app';
import ArrayBufferConverter from '../arraybufferconverter';

test('Buffer converter', () => {
  const bufferTest = new ArrayBufferConverter();

  bufferTest.load(getBuffer());
  expect(`${bufferTest}`).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
