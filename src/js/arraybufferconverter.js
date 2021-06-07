export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const bufferStr = [];
    bufferView.forEach((element) => {
      bufferStr.push(String.fromCharCode(element));
    });

    const str = bufferStr.join('');

    return str;
  }
}
