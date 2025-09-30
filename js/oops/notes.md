# Java script and classes 

## oop
## Object 
- collection of properties and methods 
 # why use oop
 ## parts of oop
 Object literal 
 - Constructor function 
 -Prototypes
 -Classes
 -Instances(new,this)



 ## 4pillars
 Abstraction
 Encapsulation
 Inheritance
 Polymorphism


 Here's what happens behind the scenes when the new keyword
is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is called: The constructor function iscatted with the specified arguments and this is bound tothe newly created object. If no explicit return value is specified from the constructor, Javascript assumes this , the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object
is returned.