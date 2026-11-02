/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, -1);
  }

  process(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    const A = 65;

    let keyIndex = 0;
    let result = "";

    for (const char of upperText) {
      if (!/[A-Z]/.test(char)) {
        result += char;
        continue;
      }

      const letter = char.charCodeAt(0) - A;
      const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - A;
      const newLetter = (letter + direction * shift + 26) % 26;

      result += String.fromCharCode(newLetter + A);
      keyIndex++;
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
