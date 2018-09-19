function euclidsAlgorithm(numA, numB) {
    if (numA == 0) {
        return numB;
    }

    if (numB == 0) {
        return numA;
    }

    return euclidsAlgorithm(numB, numA % numB);
}