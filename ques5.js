//map() double 
let num = [1,2,3,4,5];
let doubled =num.map(num => num*2);
console.log(doubled);

//filter() even number
let numbers =[1,2,3,4,5,6,7,8];
let evennumbers = numbers.filter(num => num %2 ===0);
console.log(evennumbers);

//filter() > age 18
let users=[{name:"Thaslima",age:21},
    {name:"Vasima",age:19},
    {name:"Aathil",age:15}]
let adults=users.filter(user=>user.age>18);
console.log(adults)

//reduce() cal & tot sum
let numbers=[10,30,49,72];
let total=numbers.reduce((sum,num)=>sum+num,0);
console.log(total);

//Uppercase Using map()
let names=["thaslima","sana","azlin"];
let upperNames=names.map(name=>name.toUpperCase());
console.log(upperNames);