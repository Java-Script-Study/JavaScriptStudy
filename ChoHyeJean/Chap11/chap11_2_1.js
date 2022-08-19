const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    likes:["apple","samsung"],
    printHello:function(){
        return "hello";
    }
};

console.log(person["name"]["firstName"]);
console.log(person["likes"]);
console.log(person["printHello"]());
console.log(person.name.lastName);
person.name = "Kim";
console.log(person.name);