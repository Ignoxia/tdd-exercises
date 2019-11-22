//const {REGULAR, NEW_RELEASE, CHILDRENS} = require('./movie-codes');
const {Movie} = require('./Movie');

let Customer = (name) => {
  let rentals = [];

  let getTotalCharge = () =>{
    for (let i = 0; i < rentals.length; i++) {
      let subTotal = 0;
      // // add frequent renter points
      frequentRenterPoints += rentals[i].getFrequentRenterPoints();
      // //show figures for this rental
      statement += '\t' + rentals[i].movie.title + '\t' + rentals[i].getCharge().toString(10) + '\n';
      total += rentals[i].getCharge();
    }
  }

  let getTotalFrequentRenterPoints = () =>{
    let getTotalFrequentRenterPoints = 0;
    for (let i = 0; i < rentals.length; i++){
      getTotalFrequentRenterPoints += rentals[i].getFrequentRenterPoints();
    } 
    return getTotalFrequentRenterPoints;
  },

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      //add footer lines
      statement += 'Amount owed is ' + getTotalCharge;
      statement += 'You earned ' + getTotalFrequentRenterPoints() +
          ' frequent renter points';

      return statement;
    }
  };
};

module.exports = {Customer};






