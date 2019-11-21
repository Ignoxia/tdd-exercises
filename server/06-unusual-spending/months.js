let prior = (date = new Date()) =>{
    //let date = new Date();
    if (date.getMonth() === 0)
        return {Year: date.getFullYear() - 1, Month: 12};

    return {Year: date.getFullYear(), Month: date.getMonth()};
}
let current = () =>{
    let date = new Date();
    return {Year: date.getFullYear(), Month: date.getMonth() + 1};
}
module.exports = {prior, current}