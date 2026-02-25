//user and update property
let users={
    name:"sana",
    age:21,
    isStudent:true
};
users.age=23;
console.log(users);

//clone
let user1={name:"banu",age:21,city:"virudhachalam"};
let user2={...user1};
user2.age=24;
console.log("Original:",user1);
console.log("Cloned:",user2);

//objectfreeze()
let user={name:"thasli",age:21};
Object.freeze(user);//it freeze the user
user.age=24;//won't modify
delete user.name;//won't delete
console.log(user);

//deep copy
let person={name:"Aathil",age:14,address:{city:"Vdm"}};
function deepcopy(obj){
return JSON.parse(JSON.stringify(obj));}
let copiedperson=deepcopy(person);
copiedperson.address.city="chennai";
console.log("Original:",person);
console.log("Copied:",copiedperson)