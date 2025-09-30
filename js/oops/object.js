function multiplyby5(num){
    return num*5
}

multiplyby5.power=2
// function is an object
console.log(multiplyby5(4)) //20
console.log(multiplyby5.power)  //2
console.log(multiplyby5.prototype) //{}

function createuser(username,score){
this.username=username
this.score=score
}


createuser.prototype.increment=function(){
    this.score++
}
createuser.prototype.printMe=function(){
    console.log(`score is ${this.score}`)
}

const chai =new createuser("chai",25)
const tea =  createuser("tea",150) 
chai.printMe()
tea.printMe()// gives error printMe is undefined as new is not used 
