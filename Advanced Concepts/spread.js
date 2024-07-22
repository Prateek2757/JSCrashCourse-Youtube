//Array expansion
let arr1 = [10,20,50];
let arr2 = [...arr1]; //use of spread to copy array

let arr3 = [...arr1,55,66];


console.log(arr1);
console.log(arr2); 
console.log(arr2.length);
console.log(arr3);

//Object Expansion
 const obj1={a:1,b:2};
 const obj2={...obj1,c:3};

 console.log(obj2);

//function argument
function sum(a,b,c) {
    return a+b+c;
}

let number=[11,22,55];
 
 console.log(sum(...number))
