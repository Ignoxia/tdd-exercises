//const {REGULAR, NEW_RELEASE, CHILDRENS} = require('./movie-codes');
const {Movie} = require('./Movie');

let Customer = (name) => {
  let rentals = [];

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let subTotal = 0;
        let rental = rentals[i];

        //noinspection Eslint
        //subTotal = rental.getCharge();

        // add frequent renter points
        frequentRenterPoints += rental.getFrequentRenterPoints();

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + rental.getCharge().toString(10) + '\n';

        total += rental.getCharge();
      }

      //add footer lines
      statement += 'Amount owed is ' + total.toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

module.exports = {Customer};






