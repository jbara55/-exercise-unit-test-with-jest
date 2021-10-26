let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
};

const fromDollarToYen = function(valueInDolar){
    let valueInYen = (valueInDolar/oneEuroIs.USD) * 127.9;
    return parseFloat(valueInYen.toFixed(2));    
};

const fromDollarToPound = function(valueInDolar){
    let valueInPound = (valueInDolar/oneEuroIs.USD) * 0.8;
    return parseFloat(valueInPound.toFixed(2));
};

const sum = (a,b) => {
    return a + b
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromDollarToPound};