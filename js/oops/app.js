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


