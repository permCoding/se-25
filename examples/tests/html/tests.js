/**
 * Тесты
 * Функция describe и переменная assert
 * доступны в tests.js, так как они объявлены глобально
 */
describe("getMaxSubSum", function() {
    it("максимальная подсумма [1, 2, 3] равна 6", function() {
        assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });

    it("максимальная подсумма [-1, 2, 3, -9] равна 5", function() {
        assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });

    it("максимальная подсумма [-1, -2, -3] равна 0", function() {
        assert.equal(getMaxSubSum([-1, -2, -3]), 0);
    });
});