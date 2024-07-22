function greeting() {
  console.log("Hello My Name Is Pratik");
}
/* 
console.log("Before");
setTimeout(greeting,3000);
console.log("After");

setTimeout(function(){
   console.log("My Sur Name Is Guragain");
} ,4000 );

 const add=function (a,b){
    return a+b;
}

console.log(add(5,6)); */

// let getData = (firstName, getNextData)=> {
//   setTimeout(() => {
//     console.log(`Hello I am${firstName}`);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 500);
// }
//  // call back hell
// getData("Pratik", () => {
//   getData("Guragain", ()=>{
//       getData("Don")
//   });
// });

// promise function

function async(){

    return new Promise((reslove, reject) => {
        setTimeout(()=>{
            console.log("some data 1");
            reslove("sucess");
            //reject("Error While featching data");
        },3000 )
    }
)}


function async2(){

    return new Promise((reslove, reject) => {
        setTimeout(()=>{
            console.log("some data 2 ");
            reslove("sucess of Featching data");
            //reject("Error While featching data");
        },3000 )
    }
)}

console.log("Fetching data 1");
 let p1 =  async();
  p1.then((res) => {
     console.log(res);
     console.log("Fetching data 2");
     
     let p2 = async2();
     p2.then((res)=>{
   console.log(res);
     })

  });

//  p1.catch((err)=>{
//     console.log(err);
 
