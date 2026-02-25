//normal function
function greet(name){
    return "Hello "+name;
}
console.log(greet("Thaslima"));


//arrow function 
const greet=name=>{
    return "Hello "+name;
}
console.log(greet("Thaslima"));


//add two numbers
const add=(a,b)=>
{
return a+b;
};
console.log(add(9,3));


//callback fn
function greet(name, callback) {
console.log("Hi " + name);
callback();
}
function sayBye() {
console.log("Have a nice day!");
}
greet("Aishu", sayBye);