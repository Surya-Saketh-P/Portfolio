


/*
    ------------------- MATH ------------------------

// Math = built-in object that provides a
//        collection of properties and methods.



let x = 3.01;
let y = 2;
let z = 1;

// z = Math.ceil(x);  // result = 4
// z = Math.floor(x); // result = 3
// z = Math.round(x); // result = 3
// z = Math.trunc(x); // result = 3
// z = Math.pow(x,y); // result = 9.060099999999998
// z = Math.sqrt(x);  // result = 1.7349351572897471
// z = Math.log(x); // result = 1.1019400787607843
// z = Math.sin(45);
// z = Math.cos(45);
// z = Math.tan(45);
// z = Math.abs(-1); // result = 1
// z = Math.sign(-3.21);
// let max = Math.max(x , y, z);
// let min = Math.min(x , y, z);


console.log(min);


--------------------------------------------------------------
*/



    // -------------- COUNTER ------------
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    countLabel.textContent = 0;
    count = 0;
}
*/
// ------------------------------------------




// const = a variabe that cant be changed
/*
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("Mysubmit").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);

    circumference = 2 * PI * radius;
    document.getElementById("myH2").textContent = `circumference is = ${circumference} cm`
    
}
*/




// ----------------------------------------------------

// type conversion = change the datatype of a value to another
//                   (strings, number, booleans)

/*
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);


console.log(x , typeof x);
console.log(y , typeof y);
console.log(z, typeof z);
*/

// ------------------------------------------------


// -------------take input ------------
/*
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
/*


//------------------------------------------


//----------- arthmetic operators -----------
/*
    let students = 30;

    students = students + 1;
    students = students - 1;
    students = students + 2;
    students = students / 2;
    students = students ** 2;
*/
    /*
        operator precedence
        1.parenthesis ()
        2. exponents
        3. multiplication & division & modulo
        4.addition & substraction

    
    console.log(students);
*/


// --------------------------------------------

// console.log("Hello")
// console.log("I like pizza")


// window.alert("This is an alert")
// window.alert("I like pizza")

// document.getElementById("myH1").textContent = "Hello"
// document.getElementById("myP").textContent = "I like pizza"

/* ------------------ Variables -----------------

    variable = A container that stores a Value.
 //           Behaves as if it were the value it contains.


 1. Declaration         let x;
 2. Assignment          s = 100;


 ----------------------------------------------
*/

// let age = 25;
// let price = 10.99;
// let gpa = 9.2;
// let firstname = "surya";
// let favoritefood = "Shusi"
// let email = `Surya123@gmail.com`

/*
let fullname = "Surya saketh";
let age = 18;
let isstudent = true;

document.getElementById("p1").textContent = `your name is ${fullname}`;
document.getElementById("p2").textContent = `your age is ${age}`;
document.getElementById("p3").textContent = `Enrolled :${isstudent}`;
*/




