let arrayForModification = [3, 0,-5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
                          /* [-1,-8,-2]
                             [1,7,3]
                             [1,undefined,3,5,-3]
                             [1,NaN,3,5,-3] */

let numberEvaluation = () => {
    let min = arrayForModification[0], max = arrayForModification[0];

    for (let i = 1; i <arrayForModification.length; i++) {
        let value = arrayForModification[i];
        min = (value < min) ? value : min
        max = (value > max) ? value : max
    }

    return [min, max];
}

let [minNumber, maxNumber] = numberEvaluation();

console.log(`Minimum: ${minNumber}, Maximum: ${maxNumber}`);

let sumOfArrayNumbers = arrayForModification.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sumOfArrayNumbers);