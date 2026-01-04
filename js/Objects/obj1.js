
//singelton
// const User=new Object()
//object Literals
//symbol
const mySym=Symbol("Key1")
const user ={
    name:"piyush",
    // mySym:"my key 1", //use as a string
    [mySym]:"my key 1", //use as a symbol
    "fullname":"piyush aggarwal",//cant access through dot operator
    age:18,
    location:"delhi",
    email:"piyush@gmail.com",
lastLogin:["mon","tue"]

}

// console.log(user.email)
// console.log(user.mySym) //type string
// console.log(user[mySym]) //type string
// console.log(user["email"])

//change values
// user.name="Piyush"
// // Object.freeze(user)// freeze the user cant change the user 
// user.greeting=function()
// {
//     console.log("hello user ")
// }
// user.greeting2=function()
// {
//     console.log(`hello user 
//         ${this.name}`)
// }

// console.log(user.greeting)//function
// console.log(user.greeting())//"hello user"


const regulareUser={
    email:"some@gmail.com",
    fullname:{userfullname:{
        firstname:"piyush",
        lastname:"aggarwal"
    }}
}
console.log(regulareUser.fullname.userfullname)


//combinig objects
const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
// const obj3=Object.assign({},obj1,obj2) //{}=>target obj1 obj2 =>source
const obj3={...obj1,...obj2}


console.log(Objects.keys(regulareUser))
console.log(Objects.values(regulareUser))
console.log(Objects.entries(regulareUser))

console.log(regulareUser.hasOwnProperty(1))



const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"piyush"
}

const {courseInstructor}=course
console.log(courseInstructor)
const {courseInstructor: CI}=course
console.log(CI)


