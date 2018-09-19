function argumentsInfo() {
    let countArgs = {};

    for (let arg of arguments) {
        let type = typeof arg;        
        console.log(`${type}: ${arg}`);

        if (countArgs.hasOwnProperty(type) === false) {
            countArgs[type] = 0;
        }
        countArgs[type]++;
    }

    let sortedTypes = [...Object.keys(countArgs)].sort((a, b) =>  countArgs[b] - countArgs[a]);

    for (let type of sortedTypes) {
        console.log(`${type} = ${countArgs[type]}`);
    }
}