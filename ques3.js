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