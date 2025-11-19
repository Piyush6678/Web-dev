import {compose} from "redux"

function removeSpaces(string){
    return string.split(" ").join("")
}


function repeatString(string){
    return  string.repeat(2)
}
function toUpper(string){
    return  string.toUpperCase()
}
const input="piyush aggarwal"//wnat to apply all th e function
// console.log(toUpper(repeatString(removeSpaces(input))))

const composeFunction =compose(removeSpaces,repeatString,toUpper)
console.log(composeFunction(input))