const user={
    username:"piyush",
    loginCountL:8,
    signedIn:true,
     
    getUserDeatils:function (){
//console.log("Got user details fromdb")
console.log(`Username:${this.username}`)  
console.log(this)  // give user details
}

}
console.log(user.username);
console.log(user.getUserDeatils());
console.log(this)   //{}


function User(username ,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

const userOne=new User("piyush",3,true)
const userTwo=new User("mridul",6,true)
console.log(userOne)






