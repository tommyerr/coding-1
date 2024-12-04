// What is a Function
'A function is a set instructions that performs a specific task or job'

// Functions come in 2 variations:
// built in functions- there are instructions that are pre written
// into the coding language all we need to do is pass in data


// examples
var classname= 'coding'
console.log(classname)



// user defined functions- there are custom instructions written by
// engineer to make code that performs specific task

// how do we write a user-defined function?

function examplefunction(){
        console.log('the function script is connected')
}
// in order to have functions work we need to call it 
// the above code is the function defintion meaning its 
// only telling the computer instructions not to actually run it

// we access or call a function by writing its name
// examplefunction()

let accountbalance = 1000

function depositmoney(){
let newbalance = accountbalance + 200
document.getElementById("data").innerHTML = newbalance

}
function login(email, password) 

// data that we want to manipulate goes inside of the round brackets 
// the instructions on what we want to do with data
// goes inside of the curly brackets