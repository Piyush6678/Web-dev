// let a =10
// const b=20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)

//  scope problem with var
// var c=300
// if(1){
//     let a =10
//     const b=20
//     var c=30 or c=30
// }
// console.log(a) //not defined 
// console.log(b)//not defined
// console.log(c) // prints c


let a=300
// if(1){
//     let a =10
//     
// console.log(a) //10
// }
// console.log(a) //300 
// 

function one(){
    const username="piyush"
    function two(){
        const website="youtube"
    console.log(username)
}
console.log(website)//not defined
two()
}
one()

//++++++++++++++++++++++++interesting++++++++++
addone(5) // works fine
function addone(num){
    return num+1;
}
addtwo(5) // cant access before initialization 
const addtwo=function (num){  // aka expression
    return num+2;
}