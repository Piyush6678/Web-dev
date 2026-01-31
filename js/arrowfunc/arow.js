const user={
    name:"piyush",
    price:999,

welcomeMessage:function (){
console.log(`${this.username}welcome to website
`) }

}

user.welcomeMessage()//piyush
user.name="mridul"
user.welcomeMessage()//mridul
console.log(this)//emplty in node environment

// function chai(){
    //     let username="pioyush"
    //     // console.log(this) //not empty
    //     console.log(this.username) //cant access
    // }
    
    //arrow funciton
    const chai=()=>{
        let username="piyush"
        console.log(this) // empty
}

const addTwo=(
    num1,num2
)=>{
    return num1+num2 //explicit return 
}
// const addTwo=(
//     num1,num2
// )=>( num1+num2) //implicit return 
