function extensibleObject() {
    let newObj = {};

    newObj.extend = function (parentObj) {
        for (let prop in parentObj) {
            if (parentObj.hasOwnProperty(prop)) {
                if (typeof parentObj[prop] === 'function') {
                    Object.getPrototypeOf(newObj)[prop] = parentObj[prop];
                } else {
                    newObj[prop] = parentObj[prop];
                }
            }
        }
    };

    return newObj;
}