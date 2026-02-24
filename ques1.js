//Odd or Even
let num = 10;
if (num % 2 === 0){
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