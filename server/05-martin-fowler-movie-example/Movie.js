const REGULAR = 0;
const NEW_RELEASE = 1;
const CHILDRENS = 2;

let Movie = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  function getCharge(daysRented) {
    let subTotal = 0;
    switch (priceCode) {
      case REGULAR:
        subTotal += 2;
        if (daysRented > 2) {
          subTotal += (daysRented - 2) * 1.5;
        }
        break;
      case NEW_RELEASE:
        subTotal += daysRented * 3;
        break;
      case CHILDRENS:
        subTotal += 1.5;
        if (daysRented > 3) {
          subTotal += (daysRented - 3) * 1.5;
        }
        break;
      default:
    }
    return subTotal;
  }

  function getFrequentRenterPoints(daysRented){
    let frequentRenterPoints = 1;
    // add bonus for a day new release rental
    if((priceCode === NEW_RELEASE) &&
      daysRented > 1)
      frequentRenterPoints++;
    return frequentRenterPoints;
  }

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; },
    REGULAR,
    NEW_RELEASE,
    CHILDRENS,
    getCharge,
    getFrequentRenterPoints
  };
};

Movie.REGULAR = REGULAR
Movie.NEW_RELEASE = NEW_RELEASE
Movie.CHILDRENS = CHILDRENS

module.exports = { Movie };
