function solve(arr) {
    
    let commandProcessor = (function() {
        let str = '';
        return {
            "append": (st) => {str += st},
            "removeStart": (num) => {str = str.substring(num)},
            "removeEnd": (num) => {str = str.substring(0, str.length - num)},
            "print": () => {console.log(str)}
        }        
    }());

    for (const data of arr) {
        let [command, prop] = data.split(' ');
        commandProcessor[command](prop);
    }    
}
