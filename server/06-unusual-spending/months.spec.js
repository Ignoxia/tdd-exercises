const months = require('./months');

describe('months spec', () => {
    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    })


    it('expects prior month', () => {
        let date = new Date();
        expect(months.prior()).toEqual({ Year: date.getFullYear(), Month: date.getMonth() });
});

it('expects current month', () => {
    let date = new Date();
    expect(months.current()).toEqual({ Year: date.getFullYear(), Month: date.getMonth() + 1 })
});
it('what about january 1 2020', () => {
    let date = new Date('January 1, 2020')
    expect(months.prior(date)).toEqual({ Year: 2019, Month: 12 })
})
});