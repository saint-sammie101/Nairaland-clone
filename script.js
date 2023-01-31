//var a;

//function calc(){
//   try{

  //    fetch("https://facebook.com")

   //}catch(e){
     // console.log(e)
  // }
   
//}

//calc()

//console.log("hello world")

function handleclick(){
   alert("hello world")
}
function handleinput(a,b){
   alert(a + b)
}

/*
common js event
1 onclick
2 onmousehover
3 onmouseenter
4 onmouseleave
5 ondblclick
6 onkeyup
7 onkeydown
8 onchange

<input type="text" nam="firstname">
<input type="text" nam="lastname">

function handleclick(){
   return('Hello')
   }
   console.log(handleclick('Hello'))
   




*/


// selector in js 
// 6 ways in selecting in js 
// 1. document.getelementbyid 
// 2. document.getelementsByclass
// 3. document.queryselector
// 4. document.queryselectorall 
// 5. document.getElementsByName
// 6. document.getElementsByTagName 


var a =document.getElementById("btn").onclick = ()=> alert("hello");

console.log(a);


