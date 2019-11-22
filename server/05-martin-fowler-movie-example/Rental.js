const {Movie} = require('./Movie')

let Rental = (movie, daysRented) => {

  function getCharge() {
    return movie.getCharge(daysRented);
  }

  function getFrequentRenterPoints(){
    return movie.getFrequentRenterPoints(daysRented);
  }

  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge,
    getFrequentRenterPoints
  };
};

module.exports = { Rental };

