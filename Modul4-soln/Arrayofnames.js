const countries = ['Norway', 'Sweden',  'Denmark', 'New Zealand','newyark','newDelhi'];

const startsWithN = countries.filter((country) => country.startsWith("N"));

console.log("Hello ",startsWithN);

const startswithn = countries.filter((country) => country.startsWith("n"))
console.log("starts with n: Good Bye", startswithn )
