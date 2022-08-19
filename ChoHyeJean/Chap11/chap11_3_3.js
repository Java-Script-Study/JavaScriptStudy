const date = new Date(2022,07,19,18,30,50);
const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(dateFormat);

const date1 = new Date('1999-11-05');
const date2 = new Date('2022-08-19');
/*
const dateDiff = date2.getTime() - date1.getTime();
const interval = dateDiff / (24 * 60 * 60 * 1000);
console.log(`두 날짜의 차이는 ${interval}일 입니다.`);
*/
const dateDiff = (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
console.log(`두 날짜의 차이는 ${dateDiff}일 입니다.`);