function aggregates(arr) {
    let join = arr.join(''); 
    let sum = arr.reduce((a, b) => a + b);
    let min = arr.sort((a, b) => a - b)[0];
    let max = arr.sort((a, b) => b - a)[0];
    let product = arr.reduce((a, b) => a * b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);    
}
