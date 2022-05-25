function ceasarCipher(str, shift) {
  return String.fromCharCode(
    ...str.split('').map((char) => ((char.charCodeAt() - 97 + shift) % 26) + 97)
  );
}

module.exports = ceasarCipher;
