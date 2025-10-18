function SetUsername(username){

    this.username=username
}
function createUser(username,email,password){
    SetUsername(username) // not calling the function( not holding the reference )
    SetUsername.call(username) //  calling the functiom 
    SetUsername.call(this,username) //  this will work finally 

    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai)//createUser { email: 'chai@fb.com', password: '123' }
