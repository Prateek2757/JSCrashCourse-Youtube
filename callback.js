function greeting(name){
    console.log(` Helllo ${name}`);
}

function getUserInput(callback){
    var name = prompt("Please Enter Ur Name");
    callback(name);
}

getUserInput(greeting);