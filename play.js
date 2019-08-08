const name = 'Vishal';
let age = 30;
let hasHobbies = true;

const summerizeUser = (userName, userAge, userHasHobby) => {
    var stmt = `${userName} is ${userAge} years old and has hobbies ${userHasHobby}`;
    return stmt;
}

console.log(summerizeUser(name, age, hasHobbies));

const add = (a, b = 5) => a + b;

console.log(`2 + 1 = ${add(2, 1)}`);