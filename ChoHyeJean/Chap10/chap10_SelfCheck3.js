function returnBMI(height, weight){
    const h = height/100;
    let BMI = weight/(h*h);
    let result = "";
    if(BMI >= 26){
        result = "비만";
    }
    else if(BMI >= 24){
        result = "과체중";
    }
    else if(BMI >= 18.5){
        result = "정상";
    }
    else{
        result = "저체중";
    }
    return result;
}

let result = returnBMI(170, 80);
console.log(result);