function inheritance(arr) {
    // Take command and manipulate objects
    let commandExecutor = (function () {
        let result = {};

        function create(input) {
            if (input.length === 1) {
                let newObj = input[0];
                result[newObj] = {};
            } else {
                let newObj = input[0];
                let parentObj = input[2];
                result[newObj] = Object.create(result[parentObj]);
            }
        }

        function set(input) {
            let obj = input[0];
            let prop = input[1];
            let val = input[2];
            result[obj][prop] = val;
        }

        function print(input) {
            let obj = input[0];
            let props = [];
            for (let prop in result[obj]) {
                props.push(`${prop}:${result[obj][prop]}`);
            }
            console.log(props.join(', '));
        }

        return { create, set, print}
    })();

    // Get input from array and call commands from closure
    for (let str of arr) {
        let input = str.split(' ');
        let command = input.shift();
        commandExecutor[command](input);
    }
}

// Test
inheritance(['create c1',
            'create c2 inherit c1',
            'set c1 color red',
            'set c2 model new',
            'print c1',
            'print c2']);