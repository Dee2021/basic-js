const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  generateKey(message, key) {
    let generatedKey = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message[i].match(/[A-Za-z]/)) {
        generatedKey += key[j % key.length].toUpperCase();
        j++;
      } else {
        generatedKey += message[i];
      }
    }

    return generatedKey;
  }

  transformMessage(message, key, encrypt = true) {
    let result = '';

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Za-z]/)) {
        const messageCharCode = message[i].toUpperCase().charCodeAt(0) - 65;
        const keyCharCode = key[i % key.length].toUpperCase().charCodeAt(0) - 65;
        const offset = encrypt ? (messageCharCode + keyCharCode) % 26 : (messageCharCode - keyCharCode + 26) % 26;
        const transformedChar = String.fromCharCode(offset + 65);
        result += transformedChar;
      } else {
        result += message[i];
      }
    }

    return result;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const generatedKey = this.generateKey(message, key);
    const encryptedMessage = this.transformMessage(message, generatedKey, true);

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const generatedKey = this.generateKey(encryptedMessage, key);
    const decryptedMessage = this.transformMessage(encryptedMessage, generatedKey, false);

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
