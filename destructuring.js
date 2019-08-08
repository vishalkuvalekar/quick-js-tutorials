const person = {
    name: 'Vishal',
    age: 30,
    greet() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const printName = person => {
    console.log(person.name);
}

const printNameByDestructuring = ({ name }) => {
    console.log(name);
}

printName(person);
printNameByDestructuring(person);

const {name, age} = person;
console.log(name, age);

const hobbies = ['sports', 'reading'];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);