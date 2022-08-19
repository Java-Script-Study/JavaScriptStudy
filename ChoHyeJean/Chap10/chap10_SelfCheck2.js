function returnMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}
const max = returnMax([1,2,3,4,5]);
console.log(`제일 큰 수 : ${max}`);