const { fetch } = require('./fetch')
const { categorize } = require('./categorize')
const {email} = require('./email')
let unusualSpending = async (userId) => {
    try{
    email(userId, categorize(await fetch(userId)));
    }
    catch (error){
        throw new Error("Unusual Spending Failed!")
    }
    return {string: 'string'};
}
module.exports = {unusualSpending}