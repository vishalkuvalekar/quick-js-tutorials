const hobbies = ['sports', 'reading'];

console.log(hobbies.slice());
console.log(...hobbies);

const toArray = (arg1, arg2, arg3) => {
    return [1, 2, 3];
}

console.log(toArray(1, 2, 3));

const toArrayWithRest = (...arg) => {
    return arg;
}

console.log(toArrayWithRest(1, 2, 3));