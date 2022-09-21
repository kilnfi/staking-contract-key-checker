import { expect } from 'chai';
import { describe, it } from 'mocha';
import { increment } from '../src';

describe('Simple Test', () => {
    it('Increments a positive number', () => {
        const n = 1;
        const expected = 2;

        expect(increment(n)).is.eq(expected);
    });
});
