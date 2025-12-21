import { sum, arrowSum } from "./amazingMath.js";
import { PI } from "./amazingMath.js";

import { fetchUsers } from "./api.js";

fetchUsers();


const sum1 = sum(1, 5);
const sum2 = arrowSum(4,2);

/*
import * as math from "./amazingMath.js";

const sum1 = math.sum(1, 5);
const sum2 = math.arrowSum(4,2);
*/
console.log(sum1,sum2);
console.log(PI);

const person = {
    fistName: "Ivan",
    lastName: "Ivanov",
    address: {
        city: "Plovdiv",
        street: "Main St",
        number: "12A"
    },
    age: 50,
    hobbies: ["reading", "traveling", "Fitness"]
};
console.log(person.address.city);
person.fistName = "Peter";
console.log(person.fistName);

const personInfo = `${person.fistName} ${person.lastName} is not so old: ${person.age}.`;
console.log(personInfo);










const a = { number01: 2, number02: 3}

const b = { chisloto3: 4, chisloto4: 5
};

const mergedAndB = { ...a, ...b };
const clonedA = { ...a };

const array1 = [1,2,3];
const array2 = [4,5,6];

const clonedArray1 = [ ...array1 ];
const mergedArrays = [ ...array1, ...array2 ];


constfruit = {
    fruitName: "Kiwi",
    weight: 100,
    size : "L"
}

const { fruitName, weight} = fruit
console.log(fruitName, weight);


const { t } = {t: 1};
console.log(t); 