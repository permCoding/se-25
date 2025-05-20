import { assert } from 'chai';
import getMaxSubSum from '../src/utils.js'; // .js обязательно

describe('getMaxSubSum', () => {
    it('должна возвращать 6 для [1, 2, 3]', () => {
        assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });

    it('должна возвращать 5 для [-1, 2, 3, -9]', () => {
        assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });

    it('должна возвращать 0 для отрицательных значений', () => {
        assert.equal(getMaxSubSum([-1, -2, -3]), 0);
    });
});
