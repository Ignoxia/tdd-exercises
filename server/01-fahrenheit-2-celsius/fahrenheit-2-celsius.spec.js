let farenheit2celsius = fahrenheit => (fahrenheit -32) * 5 / 9;

describe('the fahrenheit-2-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
  it('farenheit2celsius of 32 is 0', () => {
    expect(farenheit2celsius(32)).toBe(0);
  });
    it('farenheit2celsius of 212 is 100', () => {
      expect(farenheit2celsius(212)).toBe(100);
    });
    it('farenheit2celsius of 50 is 10', () =>{
      expect(farenheit2celsius(50)).toBe(10);
    },);
    it('farenheit2celsius of -40 is -40', () =>{
      expect(farenheit2celsius(-40)).toBe(-40);
    },);
});