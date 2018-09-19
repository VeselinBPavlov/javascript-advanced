function getFibonator() {
    let frontNum = 1;
    let backNum = 0;
    return function () {
        let nextNum = backNum + frontNum;
        backNum = frontNum;
        frontNum = nextNum;
        return backNum;
    }
}
