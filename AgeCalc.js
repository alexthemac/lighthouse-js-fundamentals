function ageCalculator(name, bYear, cYear) {
  let age = cYear - bYear;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Alex", 1988, 2021));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));