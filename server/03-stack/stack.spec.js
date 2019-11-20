describe('a stack', () => {
    it('canary shows the infrastructure works', () => {
        expect(true).toBe(true);
    });

    let makeStack = (capacity = 3) => {
        if(capacity <= 0) throw new Error('invalid stack capacity');
        let array = [];
        return {
            isEmpty: () => {return array.length === 0;},
            size: () => {return array.length;},
            push: (item) => {
                if(array.length > 3) throw new Error('stack capacity exceeded');
                array.push(item);
            },
            pop: () => {
                if(array.length < 1) throw new Error('stack is empty');
                return array.pop();
            }
        }
    }

    let stack = makeStack();
    beforeEach(() => {
        stack = makeStack();
    });
    it('starts empty', () => {
        expect(stack.isEmpty()).toBe(true);
    })
    
    it('starts with stack size 0', () => {
        expect(stack.size()).toBe(0);
    });

    it('is not empty when pushed', () => {
        stack.push();
        expect(stack.isEmpty()).toBe(false);
    });

    it('stack size 1 when pushing again', () => {
        stack.push();
        expect(stack.size()).toBe(1);
    });

    it('stack is empty when pushed and poped', () => {
        stack.push();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    it('stack size 0 when pushed and poped', () => {
        stack.push();
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it('overflows when pushed over capacity', () => {
        for (i = 0; i < 4; i++) {
            stack.push();
          }
        expect(() => {
            stack.push();
        }).toThrowError('stack capacity exceeded');
    });

    it('under-flows when popped when empty', () => {
        stack.push();
        stack.pop();
        expect(() => {
            stack.pop();
        }).toThrowError('stack is empty');
    });

    it('pops the same one pushed', () => {
        stack.push('Apples');
        expect(stack.pop()).toBe('Apples');
    });

    it('pops the same two pushed', () => {
        stack.push('Apples');
        stack.push('Bananas');
        expect(stack.pop()).toBe('Bananas');
        expect(stack.pop()).toBe('Apples');
    });

    it('accepts only positive capacity', () => {
        expect(() => {
            makeStack(-1);
        }).toThrowError('invalid stack capacity');
    })
});