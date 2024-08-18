/*
+ Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
+ Given an array of car manufacturers, convert the array to a string and back to an array
+ Given an array of the names of your friends, add the words hello to each element of the array
+ Convert numeric array to Boolean
+ Sort the array [1,6,7,8,3,4,5,6] in descending order
+ Filter array [1,6,7,8,3,4,5,6] by value> 3
+ Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
+ Implement a loop that will print the number 'a' until it is less than 10
+Implement a loop that prints prime numbers to the console
+Implement a loop that prints odd numbers to the console

*/

const moviesArr = ["Joker","Batman","Her","Harry Potter"];
for(let i=0; i<moviesArr.length; i++){
    console.log(moviesArr[i]);
}

let carManufacters = ["Ferarri","Mercedes","McLaren"];
let carManufactersString = carManufacters.toString();
console.log("String "+ carManufactersString);
console.log("Array "+ carManufactersString.split(','))

const friends = ["Yulia","Andrew"];
friends.forEach(element => {
    console.log("Hello "+ element);
});

const helloFriends = friends.map((friend)=> "Hello "+friend);
console.log(helloFriends);

const Numbers = [1,2,3,4];
const NumbersToBoolean = Numbers.map((number)=> number=true);
console.log(NumbersToBoolean);

const array = [1,6,7,8,3,4,5,6];
array.sort((a,b)=> b-a)
console.log(array)

console.log(array.filter(number => number>3));

function indexOfNumberInArray (numbersArray, number) {
        for (let i=0;numbersArray.length;i++){
            if(numbersArray[i]===number){
                return numbersArray.indexOf(numbersArray[i]);
            }
        }
    }


array1 = [1,2,3,5,8];
console.log(array1);
number1 = 8;
console.log("Index " + indexOfNumberInArray(array1,number1));


let a=15;
while(a>=10){
    console.log(a);
    a--;
}

console.log("Prime")
let number = 0;
while(number<=20){
    prime = true;
    for(i=2; i<=number-1;i++){
        if(number%i===0){
            prime=false;
            break
        }
    }
    if(number>1 && prime===true){
        console.log(number)
    }
    number++;
}

console.log("Odd numbers");
let oddNumber=0;
while(oddNumber<=20){
    if(oddNumber%2!=0){
        console.log(oddNumber);
    }
    oddNumber++;
}
