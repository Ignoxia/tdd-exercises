const {Movie} = require('./Movie')

let Rental = (movie, daysRented) => {

  function getCharge() {
    let subTotal = 0;
    switch (movie.priceCode) {
      case Movie.REGULAR:
        subTotal += 2;
        if (daysRented > 2) {
          subTotal += (daysRented - 2) * 1.5;
        }
        break;
      case Movie.NEW_RELEASE:
        subTotal += daysRented * 3;
        break;
      case Movie.CHILDRENS:
        subTotal += 1.5;
        if (daysRented > 3) {
          subTotal += (daysRented - 3) * 1.5;
        }
        break;
      default:
    }
    return subTotal;
  }

  function getFrequentRenterPoints(){
    let frequentRenterPoints = 1;
    // add bonus for a day new release rental
    if((movie.priceCode === Movie.NEW_RELEASE) &&
      daysRented > 1)
      frequentRenterPoints++;
    return frequentRenterPoints;
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRenterPoints
  };
};

module.exports = { Rental };
