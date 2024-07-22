let  student ={
     name_stu:"Pratik",
     course : "Bim",
     rollNo :17

};

let student2 ={
    namee :"gufran",
    rollNo:14,
    couse :"BBA",
    date: new Date()
}
//console.log(student);
console.log(student.rollNo,student2.namee);

console.log(typeof student2['couse']);


delete student2.couse;
console.log(student2);



student.year ="Second";
console.log(student);

