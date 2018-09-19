function personalBMI(persName, persAge, persWeight, persHeight) {
    // Taking person parameters by default
    let obj = {
        name: persName,
        personalInfo: {
            age: Number(persAge),
            weight: Number(persWeight),
            height: Number(persHeight)
        },
        BMI: Math.round(persWeight / Math.pow(persHeight / 100, 2)),
        status: ''
    }   

    // Find status of person
    if (obj.BMI < 18.5) {
        obj.status = 'underweight';
    } else if (obj.BMI < 25) {
        obj.status = 'normal';
    } else if (obj.BMI < 30) {
        obj.status = 'overweight';
    } else {
        obj.status = 'obese';
        obj.recommendation = 'admission required';
    }
    
    return (obj);
}