var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var weight = parseInt(prompt("Please enter your weight in pounds: "));
var height = parseInt(prompt("Please enter your height in inches: "));
var bmi = function(weight, height) {
return (weight / 2.2046226218) / ((height * 0.0254) * (0.0254 * height));
};
alert("Your BMI is: " + bmi(weight, height) + "kg/m^2");

var celcius = parseInt(prompt("Please enter your temperature in cecius: "));

var toFerenheit = function(celcius, toFerenheit) {
return (celcius * 1.8 + 32)};
alert("Your temperature is: " + toFerenheit(celcius, toFerenheit));

var gallons = parseInt(prompt("How many gallons of gas did you get?: "));

var toLiters = function(gallons) {
return (gallons * 3.78541)};
alert("You purchased: " + toLiters(gallons));
