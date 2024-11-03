// You are given an array representing the daily average temperatures (in Celsius) of a month.
const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];

/*****************************************************************
Part 1: Temperature Analysis

Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
       Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]

Task 2) Create a new array containing temperatures less than 20 degrees Celsius.
       Output 2) [19, 18, 19, 19]

******************************************************************/
function AboveOrEqual25(temp) {
  return temp>=25;
}
function Below20 (temp) {
  return temp<20;
}
let highTemps= temperatures.filter(AboveOrEqual25);
let lowTemps= temperatures.filter(Below20);
console.log(`${highTemps}`);
console.log(`${lowTemps}`);

/*****************************************************************
Part 2: Temperature Transformation

Task 3) Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
       Output 3) [
       71.6, 77, 66.2, 75.2,
       82.4, 86, 69.8, 68,
       80.6, 84.2, 73.4, 78.8,
       75.2, 71.6, 64.4, 66.2, 
       69.8, 82.4, 86, 80.6, 
       78.8, 77, 71.6, 73.4, 
       66.2, 68, 82.4, 84.2,
       80.6, 78.8 
]

Task 4) Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
       Output 4) [
  'Mild', 'Warm', 'Cool', 'Mild',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Warm', 'Warm', 'Mild', 'Warm',
  'Mild', 'Mild', 'Cool', 'Cool',
  'Mild', 'Warm', 'Warm', 'Warm',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Cool', 'Mild', 'Warm', 'Warm',
  'Warm', 'Warm'
]

******************************************************************/
function C2F(tempC){
   return ((tempC)*(9/5))+(32);
}
let tempF= temperatures.map(C2F);
console.log(`${tempF}`);

function WordTemp(temp){
    if (temp>=25) return "warm";
    if (temp>20 && temp<25) return "mild";
    if (temp<20) return "cool";
}
//the task has a wrong promt for the word mild it should be 25 not 24 ;
let tempWords = temperatures.map(WordTemp);
console.log(`${tempWords}`);


/*****************************************************************
Part 3: Summary Statistics

Task 5) Calculate and return the highest temperature of the month.
       Output 5) 30

Task 6) Calculate and return the lowest temperature of the month.
       Output 6) 18

******************************************************************/
let topTemp=temperatures[0];
for (let i=0;i<temperatures.length;i++){
    if (topTemp<temperatures[i]) topTemp=temperatures[i];
}
console.log(`${topTemp}`);

let lowTemp=temperatures[0];
for (let i=0;i<temperatures.length;i++){
    if (lowTemp>temperatures[i]) lowTemp=temperatures[i];
}
console.log(`${lowTemp}`);

// Note: Use appropriate JavaScript array iteration methods such as filter, map, reduce, etc., to achieve the desired output for each task.
