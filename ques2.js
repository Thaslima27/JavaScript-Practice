//difference
function Example() {
if (true){
    var a = 10;
    let b = 20;
    const c = 30;
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
let message = "hello buddy";
console.log(message);
}
console.log(message);//won't work bcz no msg in outside block

//const
const person={
name: "Thasli",
age: 20};
console.log(person);
person.age = 21;
console.log(person);