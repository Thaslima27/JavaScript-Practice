//add two numbers
function addNumbers(a:number, b:number):number {
return a + b;
}
let result = addNumbers(10, 20);
console.log(result);

//Interface
interface User {
id: number;
name: string;
email: string;
}
let user1: User = {
id: 1,
name: "Thasli",
email: "thasli@email.com"
};
console.log(user1);

//Enum
enum Direction {
Up,
Down,
Left,
Right
}
let move: Direction = Direction.Up;
console.log(move);

//optional parameters
function greet(name:string,age?:number):string {
if(age) {
return `Hello ${name}, you are ${age} years old`;
}
return `Hello ${name}`;
}
console.log(greet("Zara"));
console.log(greet("Zara", 22));

//generic fn
function identity<T>(value:T):T
{
return value;
}
let num = identity<number>(100);
let text = identity<string>("Hello");
console.log(num);
console.log(text);