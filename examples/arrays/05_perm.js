function getPermutations(arr, len=arr.length) {
    const result = [];

    function backtrack(current, remaining) {
        if (current.length === len) {
            result.push(current.join(''));
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const nextDigit = remaining[i];
            const newRemaining = remaining.filter((_, index) => index !== i);
            // const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i+1)];
            backtrack([...current, nextDigit], newRemaining);
        }
    }

    backtrack([], arr);
    return result;
}

const alph = '0123456789AB';
const symbols = alph.split('');
const len = 4;

const permutations = getPermutations(symbols, len);
// и для алфавита из 12-ти символов при длине комбинации 4 будет 11880 перестановок

// const permutations = getPermutations(symbols); // тогда все возможные перестановки
// и для алфавита из 10-ти символов это будет 3628800 перестановок

permutations.forEach(elm => console.log(elm));
console.log(permutations.length);
