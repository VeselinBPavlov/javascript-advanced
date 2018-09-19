function carFactory(carModelData) {
    // Default parameters by engine.
    let engineParameters = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    };

    // Create client model with carriage.
    let clientModel = {
        model: carModelData.model,
        engine: {},
        carriage: { type: carModelData.carriage, color: carModelData.color},
        wheels: []
    };

    // Take engine type.
    let closestPower = Number.POSITIVE_INFINITY;

    for (let engine in engineParameters) {
        let enginePower = engineParameters[engine].power;
        let clientEnginePower = carModelData.power;
        let difference = Math.abs(enginePower - clientEnginePower);

        if (closestPower > difference) {
            closestPower = difference;
            clientModel['engine'].power = engineParameters[engine].power;
            clientModel['engine'].volume = engineParameters[engine].volume;
        }
    }

    // Set wheels.
    let wheel = carModelData.wheelsize;
    if (wheel % 2 === 0) {
        wheel --;
    }
    clientModel.wheels.push(wheel);
    clientModel.wheels.push(wheel);
    clientModel.wheels.push(wheel);
    clientModel.wheels.push(wheel);

    return clientModel;
}

//Test
carFactory({ model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14 });
console.log();
carFactory({ model: 'Opel Vectra',
            power: 110,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17 });