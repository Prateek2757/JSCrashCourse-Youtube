

/* function greeting() {
  console.log("Hello My Name Is Pratik");
} */
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

function getData(dataId) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("some data ", dataId);
      reslove("sucess");
      //reject("Error While featching data");
    }, 3000);
  });
}
 // using Async and await for same Work
 let  getAllData= async()=> {
    console.log("Featching Data 1");
     await getData(1);
     console.log("Featching Data 2");
     await getData(2);
     console.log("Featching Data 3");
     await getData(3);
     console.log("Featching Data 4");
} ;
getAllData();
 // IIFE is used for instance use of code It can be used for featching Api Sometime
 //Example
/* (async()=>{

}) (); */




// function async2(){

//     return new Promise((reslove, reject) => {
//         setTimeout(()=>{
//             console.log("some data 2 ");
//             reslove("sucess of Featching data");
//             //reject("Error While featching data");
//         },3000 )
//     }
// )}

// console.log("Fetching data 1");
//  let p1 =  async();
//   p1.then((res) => {
//      console.log(res);
//      console.log("Fetching data 2");

//      let p2 = async2();

//      p2.then((res)=>{
//    console.log(res);
//      })

//   });

// promise chain
// console.log("Getting Data 1st");
// async(1)
//   .then((res) => {
//     console.log("Getting Data 2nd");
//     console.log(res);
//     return async(2);
//   })
//   .then((res) => {
//     console.log("getting data 3rd");
//     return async(3);
//   });

// It is complex to understand so we use another call back
// async and await

/* function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                console.log("Runing For Async and await");
                resolve(200);
        },2000)
    }
    )
}

 let callApi =async ()=>{
      await api();
      await api();
 }  
 */
 


