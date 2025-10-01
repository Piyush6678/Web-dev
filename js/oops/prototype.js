// let myName="piyush      "
// console.log(myName.length) //12 
// // if you want to get true length means no lagging spaces
// // like this console.log(myName.truelength) //6

let myHeros=["ironMan","spiderMan"]

let heroPower={
    ironMan:"suit",
    spiderMan:"sling",
    getSpiderPower:function(){
        consle.log(`Spidy Power is ${this.spiderMan}`)
    }
}
// add piyush to top level object 
Object.prototype.piyush=function(){
    console.log("piyush is present in all object")
}

heroPower.piyush() //piyush is present in all object
myHeros.piyush() //piyush is present in all object


// add piyush to top level array 
Array.prototype.heyPiyush=function(){
console.log(" hello piyush ")
}



myHeros.heyPiyush() //heyPiyush is present in all array
heroPower.heypiyush() //heyPiyush is not not present


// INHERITANCE
const User={
    name:"piyush",
    email:"chai@google.com"
}
const Teacher={
    makeVideos:true
}
const TeachSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachSupport
}
//or 
Teacher.__proto__=User