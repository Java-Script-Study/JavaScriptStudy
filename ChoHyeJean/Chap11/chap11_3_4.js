const floatNum = 10.52;
console.log(Math.floor(floatNum));
console.log(Math.ceil(floatNum));
console.log(Math.round(floatNum));

const rand = Math.random();
console.log(rand);

function getMaxRandom(max){
    return Math.floor(Math.random() * max) + 1;
}
const maxRandom = getMaxRandom(20);
console.log(maxRandom);

function getMinMaxRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + 1 + min;
}
const Random = getMinMaxRandom(10, 20);
console.log(Random);