const myArray = [2, 5, 8, 20, 18]
console.log(myArray)

let sum = 0
for (let index = 0; index < myArray.length; index++) {
    sum = sum + myArray[index]
}
console.log(sum)

sum = 0
for (const item of myArray) {
    sum = sum + item
}
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
    myArray[index] = myArray[index] / 2
}
console.log('after', myArray)

let newArray = []
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
    newArray.push(myArray[index] / 2)
}
console.log('after', newArray, 'origianl', myArray)

function addTwo(value) {
    return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

const arrFun = (value) => value +2
const resultArray2 = myArray.map(arrFun)
console.log(resultArray2)

const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray3)

function printItem (arrayInput) {
    const htmlArray = myArray.map((value) => `<p>${value}</p>`)
    console.log(htmlArray)
    return htmlArray
}

printItems(myArray)
function compareNumbers (a, b) {
    return a - b
}
printItems(myArray.sort(compareNumbers))

printItems(myArray.sort((a,b) => a - b))

const todo = [
    {
        content: 'Task 1', priorty: 2, completed: true
    },
    {
        content: 'Task 2', priorty: 1, completed: true
    },
    {
        content: 'Task 3', priorty: 3, completed: false
    }
]

console.log(todoList)

function printTodo (arrayInput) {
    const htmlArray = arrayInput.map((value) => 
    `<p${
        (value.completed) ? ' class="done"' : ''}>
        ${value.priority}: ${value.content}
        </p>`)
    return htmlArray
}
console.log(printTodo(todoList).join('\n'))

const filterArray = []
for (const item of todoList) {
    if (!item.completed) {
        filteredArray.push(item)
    }
}
console.log(printTodo(filteredArray).join('\n'))

function evalItem (item) {
    return item.completed
}

console.log(printTodo(todoList.filter(evalItem)).join('\n'))

console.log(printTodo(todoList.filter((item) => item.completed)))