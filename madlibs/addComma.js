function addComma(number) {
  const numString = String(number);

  let integerPart = numString;
  let decimalPart = "";

  if (numString.includes(".")) {
    const parts = numString.split(".");
    integerPart = parts[0];
    decimalPart = `.${parts[1]}`;
  }

  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return integerWithCommas + decimalPart;
}

module.exports = addComma;
