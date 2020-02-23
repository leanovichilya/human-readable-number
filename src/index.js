module.exports = function toReadable(number) {
    let readable = '';

    let readableNums = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty'];
    readableNums[20] = 'twenty';
    readableNums[30] = 'thirty';
    readableNums[40] = 'forty';
    readableNums[50] = 'fifty';
    readableNums[60] = 'sixty';
    readableNums[70] = 'seventy';
    readableNums[80] = 'eighty';
    readableNums[90] = 'ninety';
    readableNums[100] = 'hundred';

    if (number >= 100 && number <= 999) {
        readable += readableNums[Math.floor(number / 100)] + ' ' + readableNums[100];
    }

    if (number % 100 !== 0 && number % 100 >= 20) {
        readable += ' ' + readableNums[Math.floor(number % 100 / 10) * 10];
        if (number % 100 % 10 !== 0) {
            readable += ' ' + readableNums[number % 100 % 10];
        }
    }

    if (number % 100 !== 0 && number % 100 <= 19) {
        readable += ' ' + readableNums[number % 100];
    }

    if (number === 0) {
        return readableNums[number];
    }

    return readable.trim();
};
