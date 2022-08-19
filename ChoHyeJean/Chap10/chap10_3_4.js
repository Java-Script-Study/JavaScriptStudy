function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return;
    }
    return num1+num2;
}
//let value = sum("a", "b"); 
let value = sum(1, 3); 
console.log("out: " + value);