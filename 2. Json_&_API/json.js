// API stand for Application Programming Interface
// JSON - JavaScript Object Notation
const user = {id:1, name:'Abul', age: 33}
// stringify Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const json_data = JSON.stringify(user)
// console.log(json_data)          // Output :- {"id":1,"name":"Abul","age":33}

// patse Converts a JavaScript Object Notation (JSON) string into an object.
const object_data = JSON.parse(json_data)
// console.log(object_data)

const x = 'sss'
const x1 = 23
const x2 = [2,3,4]
// console.log(JSON.stringify(x))      // "sss"
// console.log(JSON.stringify(x1))     // 23
// console.log(JSON.stringify(x2))     // [2,3,4]

const loadtask = () => {
    fetch('http://127.0.0.1:8000/employees/')
    .then(res => res.json())
    .then(data => console.log(data))
}
loadtask()