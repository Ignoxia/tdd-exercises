//const {REGULAR, NEW_RELEASE, CHILDRENS} = require('./movie-codes');
const {Movie} = require('./Movie');

let Customer = (name) => {
  let rentals = [];

  let getTotalCharge = () =>{
    let total = 0;
    for (let i = 0; i < rentals.length; i++){
      total += rentals[i].getCharge();
    }
    return total;
  }

  let getTotalFrequentRenterPoints = () =>{
    let getTotalFrequentRenterPoints = 0;
    for (let i = 0; i < rentals.length; i++){
      getTotalFrequentRenterPoints += rentals[i].getFrequentRenterPoints();
    } 
    return getTotalFrequentRenterPoints;
  }

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++){
        statement += '\t' + rentals[i].movie.title + '\t' + rentals[i].getCharge() + '\n';
      }
      //add footer lines
      statement += 'Amount owed is ' + getTotalCharge() + '\n';
      statement += 'You earned ' + getTotalFrequentRenterPoints() +
          ' frequent renter points';

      return statement;
    }
  };
};

module.exports = {Customer};






