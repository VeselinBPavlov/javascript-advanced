function listProcessor(arr) {
    // Return result of commands with Revealing Model Pattern
    let commandExecutor = (function () {
        let result = [];
        function add(word) {
            result.push(word);
        }
        function remove(word) {
            result = result.filter(w => w !== word);
        }
        function print() {
            console.log(result.join(','));
        }
        return { add, remove, print }
    })();

    // Take commands and components from input array and call closure object
    for (let str of arr) {
        let [func, word] = str.split(' ');
        commandExecutor[func](word);
    }
}

// Test
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);