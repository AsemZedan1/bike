// syntax of js 

/**
 * Data types 
 * 
 * numbers 
 * 1 2 -2 0.4 
 * 
 * string => 'anuthing' or "ahmad"
 * 
 * Boolean =>  true / false 
 * 
 */

/**
 * 
 * variables => container for the values/ storing 
 * 
 *  var x = 12
 * var name = "ahmad"
 * 
 */
//use strict

//operators 
/**
 * 
 * assigment op   =>   = 
 * 
 * arthmatics op =>  + , - , *, / , % 
 *  1+1 , 9%3
 * 
 * comprasion op => 
 * 
 * > , < ,==,===, !=, >= , x++ , +=
 * 
 */

// var firstName = "Hannen"
//show it on the console
// console.log(firstName)
// console.log("hello console")

// var x = '123 ! @ ahahsnsanskadn'

// console.log(x)

// console.log(1+1, 2>5, 7<10)

// var num = 10
// var num2 = 829298
// var concat = firstName + "  "+ num
// var sum = num + num2 
// console.log(concat ,"sum result", sum)

// console.log(++num)

//boolean variable
// var isGreater = true 

//undefined
// var z
// //NaN
// var y = z + 10

// console.log(z, "y=",y)


// console.log(1==1, 1>8)



/*
is 1 == 1 / value 
is 1 === 1 / value and datatype
 */

// console.log(1==1 , 1=='1',1=='12',1=='9')

// console.log(1===1, 1==='1')

/*

pop up boxes 

alert("hey and welcome")//show info to the user

prompt() // input smth from user

document.write()

*/

/*
logical operators 
&& ! || 

truth table 

T && T => T
F && T => F
F || T => T
F || F =>F
T && T && F => F

 */

// var name = prompt("what is your name")

// alert("hey, wlecome to my website " + name )

// var favCar = prompt("what is you fav car?")

// // console.log(name)

// document.write('<p>' + favCar + "</p>")

// document.write("hello from javascript")


//logical op ex

// console.log(1==1 && 1>0)
// console.log(1==9 && 1>0)
// console.log(1==9 || 1>0)

/*
conditional statment 

if(condition){
  //do smth
}
else{

}

*/

// if(1<0 || 1===1){
//   console.log('yes it is')
// }
// else{
//   console.log("no it is not")
// }


var name = prompt("what is your name")

alert("hey, wlecome to my website " + name )

var favbike = prompt("what is you fav bike?")


if(favbike =="bmw"){
document.write(
  "<div>" + "<h3>" + favbikes+"</h3>"
+ "<img  src='https://livingwithgravity.com/wp-content/uploads/2019/02/a13efad5.jpg' width='100' height='100'     />" + "</div>")
}
else if (favbike =="kawasaki"){
document.write(
  "<div>" + "<h3>" + favbike+"</h3>"
+ "<img  src='https://wallpaperaccess.com/full/1591632.jpg' width='100' height='100'     />" + "</div>")
}
else if(favbike =="suzuki"){
document.write(
  "<div>" + "<h3>" + favbike+"</h3>"
+ "<img  src='https://www.motorevistacr.com/wp-content/uploads/2020/09/SUZUKI-GSX-R1000R-1024x683.jpg' width='100' height='100'     />" + "</div>")
}
else{
  alert('we dont have this bike')
}