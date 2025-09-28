const user={
    username:"piyush",
    loginCountL:8,
    signedIn:true,
     
    getUserDeatils:function (){
//console.log("Got user details fromdb")
console.log(`${this.username}`)  
}

}
console.log(user.username);
console.log(user.getUserDeatils());


