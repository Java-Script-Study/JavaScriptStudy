let a=0, b=0, c=0, am=0
for(let i = 100; i<=999; i++){
    a = i/100;
    b = (i%100)/10;
    c = (i%100)%10;
    am = (a*a*a)+(b*b*b)+(c*c*c);
    if(i == am)
        console.log(`${i}는 암스트롱 수 입니다.`);
}