let {api} = require('./api')
let months = require('./months')

let fetch =(userId) =>{

    return [
        {Month: months.current(), payments: api(userId, months.current())},
        {Month: months.prior(), payments: api(userId, months.prior())}
    ]    
}

module.exports = {fetch}