//QUES1 
let num:number=10;
if (num%2 === 0)
{
 console.log(num + "is Even");
}else{
 console.log(num + "is Odd");
}

//Reverse String
let str:string = "Thasli";
let reversed:string = str.split("").reverse().join("");
console.log(reversed)

//Largest number in array
let arr:number = [9,28,45,98,11];
let largest:number[] = arr[0];
for (let i:number=1;i<arr.length;i++){
    if (arr[i]> largest){
        largest=arr[i];
    }
}
console.log("Largest number is:",largest);

//Factorial
let num:number = 5;
let Factorial:number = 1;
for (let i:number=1;i<=num;i++)
{
    Factorial *=i;
}
console.log("Factorial:",Factorial);

//Palindrome
let str:string = "madam";
let reversed:string = str.split("").reverse().join("");
if (str === reversed )
{
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}

//Vowels
let str:string = "Thaslima Banu";
let count:number=0;
for (let i:number=0;i<str.length;i++){
    let char:string=str[i].toLowerCase();
if (char === "a"|| char === "e"|| char === "i" || char === "o"|| char === "u")
    count++;
}
console.log("Vowel count is:",count);   


//QUES 2 difference
function Example():void {
if (true){
    var a:number= 10;
    let b:number = 20;
    const c:number = 30;
console.log("Inside block:");
console.log(a);
console.log(b);
console.log(c);
}
console.log("Outside block:");
console.log(a);
}
Example();

//let 
{
let message:string = "hello buddy";
console.log(message);
}
console.log(message);//won't work bcz no msg in outside block

//const
const person:{name:String,age:number}={
    name:"thasli",
    age:20
};
console.log(person);
person.age = 21;
console.log(person);