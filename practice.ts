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

//QUES3 
//user and update property
let users:{name:string,age:number,isStudent:boolean}={
    name:"sana",
    age:21,
    isStudent:true
};
users.age=23;
console.log(users);

//clone
let user1:{name:string,age:number,city:string}={
    name:"banu",age:21,city:"virudhachalam"};
let user2={...user1};
user2.age=24;
console.log("Original:",user1);
console.log("Cloned:",user2);

//objectfreeze()
let user:{name:string,age:number}={name:"thasli",age:21};
Object.freeze(user);//it freeze the user
user.age=24;//won't modify
delete user.name;//won't delete
console.log(user);

//deepcopy
interface Address {
  city: string;
}
interface Person {
  name: string;
  age: number;
  address: Address;
}
let person: Person = {
  name: "Aathil",
  age: 14,
  address: { city: "Vdm" }
};
function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
let copiedPerson: Person = deepCopy(person);
copiedPerson.address.city = "Chennai";
console.log("Original:", person);
console.log("Copied:", copiedPerson);

//QUES4
function greet(name:string):string{
    return "Hello "+name;
}
console.log(greet("Thaslima"));

//arrow function 
const greet=(name:string):string=>{
    return "Hello "+name;
}
console.log(greet("Thaslima"));

//add two numbers
const add=(a:number,b:number):number=>
{
return a+b;
};
console.log(add(9,3));

//callback
function greet(name:string,callback:()=>void):void{
console.log("Hi " +name);
callback();
}
function sayBye():void{
console.log("Have a nice day!");
}
greet("Aishu", sayBye);

// return another function
const outer=():()=>void=>{
return():void=>{
console.log("Hello developer");};
};
outer()();

//QUES5
//map() double 
let number:number[]=[1,2,3,4,5];
let doubled:number[]=number.map(number => number*2);
console.log(doubled);


// filter() even numbers
let numbers: number[] = [1,2,3,4,5,6,7,8];
let evenNumbers: number[] = numbers.filter((num: number): boolean => num % 2 === 0);
console.log(evenNumbers);

//age> 18
let users: { name: string; age: number }[] = [
  { name: "Thaslima", age: 21 },
  { name: "Vasima", age: 19 },
  { name: "Aathil", age: 15 }];
let adults = users.filter(user => user.age > 18);
console.log(adults);

//reduce() cal & tot sum
let numbers:number[]=[10,30,49,72];
let total=numbers.reduce((sum:number,num:number)=>sum+num,0);
console.log(total);

//Uppercase Using map()
let names:string[]=["thaslima","sana","azlin"];
let upperNames:string[]=names.map((name:string):string =>name.toUpperCase());
console.log(upperNames);