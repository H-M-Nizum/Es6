// //////////////// Change css style ////////////////
document.getElementById("apply_bg").addEventListener('click', () => {
    const friends = document.getElementsByClassName("friend")
    for(const friend of friends){
        // console.log(friend)
        friend.style.backgroundColor = 'red'
        friend.style.padding = '10px'
        friend.style.margin = '10px'
        friend.style.color = 'White'
    }
})


// //////////////// add new section or div //////////
document.getElementById("add_friend").addEventListener('click', () => {
    const friend_container = document.getElementById("friends")
    const new_friend = document.createElement("div")
    new_friend.classList.add('friend')
    new_friend.innerHTML = `
        <h3 class="friend_name">New-Friend</h3>
        <p>Dolore officiis obcaecati quod unde!</p>
    `
    friend_container.appendChild(new_friend)
})

// ///////////// Function Declaration vs Expression ///////////
// Function declaration
function add(a, b){
    const sum = a + b
    return sum
}
// Function Expression
const add1 = function (a, b){
    const sum = a + b
    return sum
}
// Arrow function 
const add2 = (a, b) => a+b
const add3 = (a, b) => {
    const sum = a+b
    return sum
}

// ///////////////// Spread operator (...) ////////////////////
// Spread operator allows us to quickly copy all or part of an existi array or object into another arrau or object.
const list = [1,2,3,4,5]
// console.log(list)                // [1,2,3,4,5]   
// console.log(Math.max(list))      // NAN
// console.log(...list)             // 1,2,3,4,5
// console.log(Math.max(...list))   // 5

//  /////////////////////// Destructuring /////////////////
const {name, age, roll} = {name : 'aaa', age : 12, roll : 2}
// console.log(name, age, roll)

// ////////////////////////  Nested Object Optional Chaining //////////////////////////


// ////////////////////////  Map //////////////////////////
// আপনি map() কোনো অ্যারেতে কল করলে সেটা সেই অ্যারের প্রত্যেকটা আইটেমের উপর আপনারই দেওয়া একটা ফাংশন অ্যাপ্লাই করবে, 
// এবং সবশেষে সবগুলো আবার আরেকটা অ্যারে হিসেবে রিটার্ন করবে।
// arrayname.map(call_back_function)
const list1 = [1,2,3,4,5,6,7]
const makedouble = list1.map(value => value * 2)
// console.log(makedouble)   // [2, 4, 6, 8, 10, 12, 14]

const check_even_odd = (val) => {
    if(val === 0){
        return 0
    }
    else if(val % 2 === 0){
        return 2
    }
    else{
        return 1
    }
}
const checkEvenOdd = list1.map(check_even_odd)
// console.log(checkEvenOdd)   // [1, 2, 1, 2, 1, 2, 1]

// ////////////////////////  Foreach //////////////////////////
// Kono kichui return korbe na, previous array tei do something for every element
// list1.forEach(val => console.log(val)) // 1 2 3 4 5 6 7

// list1.forEach(val => {
//     if(val === 0){
//         console.log("Zero")
//     }
//     else if(val % 2 == 0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// })

// ////////////////////////  Filter //////////////////////////
// filter() method creates a new array filled with elements that pass a test provided by a function.
// ফিল্টার সেইম ম্যাপের মতোই কিন্তু এখানে অ্যাপ্লাইকৃত ফাংশন যদি true রিটার্ণ করে তাহলেই সেটা নতুন অ্যারেতে স্থান পাবে, 
// নতুবা যদি ফাংশন false রিটার্ণ করে তাহলে সেই আইটেম অ্যারেতে স্থান পাবে না।
const ages = [32, 33, 16, 17, 2, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
const result1 = ages.filter(age => age < 18)
// console.log(result)    // [32, 33, 40]
// console.log(result1)  //  [16, 17, 2]

// ////////////////////////  Find //////////////////////////
// Condition match korle first element ta just dibe
const resultfind = ages.find(age => age < 18)
// console.log(resultfind)     // 16

// ////////////////////////  Reduce //////////////////////////
// রিডিউস ও ম্যাপ, ফিল্টার এর মতো হলেও এটা একটা আর্গুমেন্ট বেশী নেয়। আমরা প্রোগ্রামিং ওয়ার্ল্ড এ স্ট্যাট ভ্যারিয়েবলের কথা জানি। 
// এর কাজ হচ্ছে কোনো কিছুর কাউন্ট করা, বা ডিটেক্ট করে রাখা কোনো অপারেশনের চলার সময়। 
// সহজ কথায় বললে আমরা যদি কোনো অ্যারে থেকে অ্যারের সব নাম্বারের টোটাল বের চাই, তাহলে সেক্ষেত্রে রিডিউস ইউজ করে সহজেই করে ফেলতে পারি। 
// রিডিউসে যেহেতু স্ট্যাট ভ্যারিয়েবল আছে, তাই এটাই এধরণের অপারেশনের জন্য পার্ফেক্ট চয়েজ হতে পারে।

const values = [1,2,3,4,5]
const totalsum = values.reduce((previous, current) => previous+current, 0)
console.log(totalsum)     // 15



const loadtask = () => {
    fetch('https://track-corporate-assets.onrender.com/employees/?name=akash')
    .then(res => res.json())
    .then(data => console.log(data))
}
loadtask()