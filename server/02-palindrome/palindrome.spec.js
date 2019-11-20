let isPalindrome = (string) => {
    if(!string || string.trim().length === 0) return false;

    return string.replace(/\W+/g, '') === string.split('').reverse().join('').replace(/\W+/g, '');

};

describe('a palindrome function', () => {
    it('canary shows the infrastructure works',() => {
        expect(true).toBe(true);
    });

    it('radar is a palindrome', () => {
        expect(isPalindrome('radar')).toBe(true);
    });

    it('dog is not a palindrome', () => {
        expect(isPalindrome('dog')).toBe(false);
    });
    it('race car is a palindrome', () => {
        expect(isPalindrome('race car')).toBe(true);
    });

    it('mom dad mom is a palindrome');
        expect(isPalindrome('mom dad mom')).toBe(true);

    it('"" is not a palindrome');
        expect(isPalindrome('')).toBe(false);

    it('"   " is not a palindrome');
        expect(isPalindrome('  ')).toBe(false);

    it('undefined is not a polindrome');
        expect(isPalindrome()).toBe(false);
});