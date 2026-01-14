import {
    findMaxValueInArray,
    findMinValueInArray,
    findAverageValueInArray
} from './utils.js';


function logToPage(message, type = 'info') {
    const consoleOutput = document.getElementById('consoleOutput');

    const line = document.createElement('div');
    line.classList.add(`log-${type}`);

    const prefix = {
        info: '[инфо]',
        ok: '[ok]',
        data: '[данни]',
        error: '[грешка]'
    };

    line.textContent = `${prefix[type]} ${message}`;
    consoleOutput.appendChild(line);

    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}


logToPage('Конзолата е готова. Резултатите ще се появят тук...', 'info');


const numbers = [10, 25, 5, 40, 15, 17];

logToPage('Резултати от функциите за масиви', 'info');

logToPage(`Макс стойност: ${findMaxValueInArray(numbers)}`, 'ok');
logToPage(`Мин стойност: ${findMinValueInArray(numbers)}`, 'ok');
logToPage(`Средна стойност: ${findAverageValueInArray(numbers)}`, 'ok');

console.log('Max:', findMaxValueInArray(numbers));
console.log('Min:', findMinValueInArray(numbers));
console.log('Average:', findAverageValueInArray(numbers));


const person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 22
};

const personAddress = {
    city: 'Plovdiv',
    street: 'ul. "Hristo Botev" 10',
    postalCode: '4000'
};

const mergedPerson = {
    ...person,
    ...personAddress
};

logToPage('Обединяване на обект person с address', 'info');
logToPage('Обединен обект:', 'data');
logToPage(JSON.stringify(mergedPerson, null, 2), 'data');

console.log('Merged object:', mergedPerson);


async function loadPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    const titles = posts
        .filter(post => post.userId === 3)
        .map(post => post.title);

    logToPage(`Постове (userId = 3): ${titles.length}`, 'ok');
    logToPage(titles.join(' | '), 'data');

    console.log('Titles (userId = 3):', titles);
}

loadPosts();


async function loadUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const names = users
        .map(user => user.name)
        .sort((a, b) => a.localeCompare(b));

    logToPage('Потребители (сортирани по азбучен ред):', 'info');
    logToPage(names.join(', '), 'data');

    console.log('Sorted user names:', names);
}

loadUsers();
