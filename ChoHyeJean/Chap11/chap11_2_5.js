const person = {
    name:"Hong Gildong"
};
const copyPerson = person;
person.name = "Cho";
console.log(person.name);
console.log(copyPerson.name);