// Create object using object literals
const player = {}
player.name = 'Atiqur Rhaman'       // Properties
player.age = 33                     // Properties
player.bat = function(){            // Method
    console.log("Swing your bat")
}
// console.log(player)
// player.bat()


// Object constructor
const student = new Object()
student.name = "Biral"
// console.log(student)



// object 
const student1 = {name: 'aa', roll: 2, age: 23, ispresent: true}
console.log(student1)
const keys = Object.keys(student1)
// console.log(keys)
const values = Object.values(student1)
// console.log(values)
const pair = Object.entries(student1)
// console.log(pair)

// object.seal()  - update kora jabe but remove ba add kora jabe na
// object.freeze()  - update kora jabe na and remove ba add kora o jabe na

// for of loop can not used with object
// for in loop can used with object
for(const key in student1){
    console.log(key, student1[key])
}



// ############### Call, Apply, Bind ##############
// ak object ar method onno object a use korar jonne call, apply, bind use kori
// call a parameter gulu coma separate
// apply a parameter gulu array or list
// bind use again and again

// arrow function and reqular function a this ar value change hoy.