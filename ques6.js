//1 to 50 using for loop
for (let i=1;i<=50;i++)
{
console.log(i)
}

//multipy number
let num=5;
for(let i=1;i<=10;i++)
{
console.log(num + " x " + i + "=" + (num *i));}


//1 to N 
let n=5;
let i=1;
let sum=0;
while(i<=n)
{
sum=sum+i;
i++
}
console.log("Sum:",sum);

//for...in
let user={name:"Thasli",age:22,city:"vdm"};
for(let key in user)
{console.log(key+":"+user[key]);}

//for...of
let numbers=[10,20,30,40];
for(let value of numbers)
{console.log(value);}