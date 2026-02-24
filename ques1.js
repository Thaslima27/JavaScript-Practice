//Odd or Even
let num=10;
if (num%2 === 0)
{
 console.log(num + "is Even");
}else{
 console.log(num + "is Odd");
}

//Reverse String
let str = "Thasli";
let reversed = str.split("").reverse().join("");
console.log(reversed)

//Largest number in array
let arr = [9,28,45,98,11];
let largest = arr[0];
for (let i=1;i<arr.length;i++){
    if (arr[i]> largest){
        largest=arr[i];
    }
}
console.log("Largest number is:",largest);

//Factorial
let number = 5;
let Factorial = 1;
for (let i=1;i<=number;i++)
{
    Factorial *=i;
}
console.log("Factorial:",Factorial);

//Palindrome
let str = "madam";
let reversed = str.split("").reverse().join("");
if (str === reversed )
{
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}

//Vowels
let str = "Thaslima Banu";
let count=0;
for (let i=0;i<str.length;i++){
    let char=str[i].toLowerCase();
if (char === "a"|| char === "e"|| char === "i" || char === "o"|| char === "u")
    count++;
}
console.log("Vowel count is:",count);