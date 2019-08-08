const person = {
    name: 'Vishal',
    age: 30,
    greet() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

person.greet();