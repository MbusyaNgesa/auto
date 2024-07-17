let fake = 10;
console.log(Boolean(fake));

//create/declare a function and set parameters
/*  Inside the function state the reqiurements of an autobiographical number
    Check whether numbers have 9 digits or less, if so its a true value (not auto' number)
    Go through the numbers provided to check whether they meet the conditions of an autobiographical number
    return whether the values meet the requirements of being an auto' number i.e true or false
    
*/
// after exiting function, log/show assessment of what is found above(in the function)


/*If a number is autobiographical, then the number's digits describe itself. The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc. This repeats for all digits of the number. The number 6210001000 is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.

Create a function that takes an integer n and returns whether or not n is an autobiographical number.

Examples
isAutobiographical(6210001000) ➞ true

isAutobiographical(12345) ➞ false

isAutobiographical(1210) ➞ true
// one 0, two 1's, one 2, zero 3's

isAutobiographical(638) ➞ false

isAutobiographical(0) ➞ false
// claims no zeroes, however zero is the first digit
Notes
Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
n is always >= 0 and is always an integer. */


//steps to be followed

//1.declare the function that takes the integer
//2.convert the integer into a string to access all the digits
//3.store the values of each digit that was converted into a string(variable)
//4.inside the function state the requirements of an autobiographical no.()
//5.initiallise an array to count the occurence of every digit (9)
//6.use a loop,(length of array)  -will compare the string to the array created
//7. (boolean)-if it passes the test returns true ...if not it returns false
//8.call the function



let k = [];



function auto(bio){
    let int = [3210001 , 4580007];
    let myString = int.toString();
    let arr = [6];
    arr.push(56);

    for(int=[]; int< myString.length ; int ++){
        if(int){
            console.log(int);
        }
    }

    console.log(myString, arr);  
    return bio;

    
   
}

console.log(auto(k));
     

 /*   for(let numbers = 0; numbers.length < 10 ; numbers++){
        if(numbers[bio] ){
            console.log(numbers)
        };
    };
    
}

auto(Boolean(k));
*/