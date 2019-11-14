const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// generate password dengan random acak
export default function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0]);

  // Doesn't have a selected type
  if (typesCount === 0) {
    return '';
  }

  // buat loop untuk menyusun kata sandi password
  for (let i = 0; i < length; i += typesCount) {
    const panjangArrayTypes = typesArr.length;

    for (let j = 0; j < panjangArrayTypes; j += 1) {
      const typeItem = typesArr[j];
      const funcName = Object.keys(typeItem)[0];

      switch (funcName) {
        case 'lower':
          generatedPassword += getRandomLower();
          break;
        case 'upper':
          generatedPassword += getRandomUpper();
          break;
        case 'number':
          generatedPassword += getRandomNumber();
          break;
        case 'symbol':
          generatedPassword += getRandomSymbol();
          break;
        default:
          generatedPassword += '';
          break;
      }
    }
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
