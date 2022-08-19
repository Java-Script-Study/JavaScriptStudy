const arr = [10,120,30,50,20];
let max = 0;
arr.forEach(function(v){
    if(v > max)
        max = v;
});
console.log(max);