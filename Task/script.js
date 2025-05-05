
// Question 1

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

//Question 2
function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

console.log(getGrade(85)); // B


// Question 3
const car = {
    company: "Toyota",
    model: "Camry",
    year: 2020
};

function updateCarYear(carObj, newYear) {
    carObj.year = newYear;
}

updateCarYear(car, 2024);

const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);
// Model: Camry, Year: 2024

//Question 4
const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primes = nums.filter(isPrime);
console.log(primes); // [2, 3, 5, 7]

//Question 5
map	= Transform each element in an array (e.g., double numbers, extract names);
filter = Create a new array with elements that pass a condition (e.g., even numbers, active users)
reduce = Accumulate values into one (e.g., sum all numbers, combine strings, find maximum)

//Question 6
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchData();

//Quetion 7
const person = {
    name: "John",
    address: {
        city: "New York",
        zip: "10001"
    },
    contact: {
        phone: "123-456-7890",
        email: "john@example.com"
    }
};

console.log(person.contact?.phone); // 123-456-7890

const anotherPerson = {
    name: "Jane",
    address: {
        city: "Los Angeles",
        zip: "90001"
    }
};

console.log(anotherPerson.contact?.phone); // undefined (no error!)
