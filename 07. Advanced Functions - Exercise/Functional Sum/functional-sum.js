let add = (function () {
    let total = 0;
    return function sum(num) {
        total += num;
        sum.toString = () => total;
        return sum;
    }
})();
