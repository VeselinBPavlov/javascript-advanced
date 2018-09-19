function robotCooker() {
    // Create warehouse and take recipes
    let warehouse = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2},
        coke: { carbohydrate: 10, flavour: 20},
        burger: { carbohydrate: 5, flavour: 3, fat: 7},
        omelet: { flavour: 1, fat: 1, protein: 5},
        cheverme: { carbohydrate: 10, flavour: 10, fat: 10, protein: 10}
    };

    // Take commands
    return function getInstructions(input) {
        let [command, item, quantity] = input.split(' ');
        switch (command) {
            case 'restock': return restock(item, quantity);
            case 'prepare': return prepare(item, quantity); 
            case 'report': return report();
        }
    }

    // Restock the warehouse
    function restock(product, quantity) {
        warehouse[product] += Number(quantity);
        return 'Success';
    }

    // Prepare the order
    function prepare(meal, quantity) {        
        for (let ingredient in recipes[meal]) {    
            let neededQuantity = recipes[meal][ingredient] * Number(quantity);        
            if (neededQuantity > warehouse[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient in recipes[meal]) {
            let neededQuantity = recipes[meal][ingredient] * Number(quantity);
            warehouse[ingredient] -= neededQuantity;
        }
        return 'Success';
    }

    // Make a report
    function report() {
        return [...Object.keys(warehouse)]
            .map(ingredient => ingredient + '=' + warehouse[ingredient])
            .join(' ');
    }
}