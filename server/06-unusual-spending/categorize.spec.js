const {categorize} = require('./categorize')

describe('categorize spec', () =>{

    let payments = [
        {
            Month: { year: 2019, Month: 11 },
            payments: [
                { amount: 100, category: "golf" },
                { amount: 50, category: "tennis" },
                { amount: 150, category: "golf" },
                { amount: 200, category: "tennis" }
            ]
        },
        {
            Month: { year: 2019, Month: 10 },
            payments: [
                { amount: 75, category: "golf" },
                { amount: 25, category: "tennis" },
                { amount: 100, category: "golf" },
                { amount: 150, category: "tennis" }
            ]
        }
    ]
    let categorizedPayments = [
        {
            Month: { year: 2019, Month: 11 },
            payments: [
                { amount: 250, category: "golf" },
                { amount: 250, category: "tennis" },
            ]
        },
        {
            Month: { year: 2019, Month: 10 },
            payments: [
                { amount: 175, category: "golf" },
                { amount: 175, category: "tennis" },
            ]
        }
    ]
    
    it('canary test', () => {
        expect(true).toBe(true);
    })
    it('combines and summarizes', () => {
        expect(categorize(payments)).toEqual(categorizedPayments);
    })
})