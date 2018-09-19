function sortList() {
    return (function () {
        let result = [];
        
        function add(element) {
            result.push(element);
            result = result.sort((a, b) => a - b);
        }

        function remove(index) {
            if (index >= 0 && index < result.length) {
                result.splice(index, 1);
                result = result.sort((a, b) => a - b);
            } else {
                throw new Error;
            }
        }

        function get(index) {
            if (index >= 0 && index < result.length) {
                return result[index];
            } else {
                throw new Error;
            }
        }

        function size() {
            return result.length;
        }

        let a = {add, remove, get};
        a.__defineGetter__("size", size);
        return a;
    })();
}