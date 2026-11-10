// .map()
const nums = [1, '🍓', 3]

// nums.forEach(() => {})
const numsDoubled = nums.map((num) => {
   return 'nabila'
})

// console.log(nums)
// console.log(numsDoubled)

const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David']

const newStringArr = instructors.map((instructor, index) => {
    let newStr = `${index + 1}. ${instructor} is awesome`
    return newStr
})

// console.log(newStringArr)

// .filter()
const arr = [true, false, true, false, false, true]

let newArr = arr.filter((item) => {
    return item
})

// console.log(newArr)

// const numbers = [5, 12, 8, 20, 15]

// const bigNumbers = numbers.filter((number) => {
//     return number > 10
// })

// console.log(bigNumbers)

const fruits = ['apple', 'banana', 'orange', 'banana', 'mango']

const newFruits = fruits.filter((fruit) => {
   return fruit === 'banana'
})

// .map(() => {
//     return '🙃'
// })

// console.log(newFruits)
// console.log(fruits)

const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people']

const notJerks = people.filter((person) => {
    // return person === 'nice people'
    return person !== 'jerks'
})

// console.log(notJerks)

const numbers = [5, 12, 8, 20, 15]

const result = numbers.find((number) => {
    return number > 10
})

// console.log(result)

// .find()
// const names = ['Sara', 'Ali', 'Fatima', 'Omar']

// const foundName = names.find((name) => {
//     return name === 'Fatima'
// })

// console.log(foundName)

// .findIndex()
const names = ['Sara', 'Ali', 'Fatima', 'Omar']

const foundName = names.findIndex((name) => {
    return name === 'Nabila'
})

// console.log(foundName)

const someNums = [10, 20, 30, 40]

const foundIdx = someNums.findIndex((num, index) => {
    // console.log(index)
    return num > 25
})

// console.log(foundIdx)

if (foundIdx !== -1) {
    someNums[foundIdx] = 100
}
// console.log(someNums)

const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
]

const firstWhiteCarIdx = cars.findIndex((car) => {
    return car.color === 'white'
})
// console.log(firstWhiteCarIdx)

// .some()

const hasFord = cars.some((car) => {
    return car.make === 'Ford'
})

// console.log(hasFord)

const tasks = ['done', 'done', 'done', 'done']

const hasPendingTasks = tasks.some((task) => {
    return task === 'pending'
})

// console.log(hasPendingTasks)

const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];
const isARandomElephantInMyRoom = thingsInMyRoom.some((item) => {
    return item === 'random elephant'
})
// console.log(isARandomElephantInMyRoom)

// .every()

const ages = [15, 23, 19, 30]

const allAdults = ages.every((age) => {
    return age >= 18
})

const someAdults = ages.some((age) => {
    return age >= 18
})

// console.log('all: ', allAdults)
// console.log('some: ', someAdults)

// CHAINING
const moreNums = [5, 10, 15, 20]
const bigNums = []
bigNums = moreNums.filter((num) => {
// numbers greater than 10
    return num > 10
})

console.log(bigNums)

const doubleBigNums = bigNums.map((number) => {
    return number * 2
})

console.log(doubleBigNums)

const chainedNums = moreNums.filter((num) => {
   return num > 10
}).map((number) => {
    return number * 2
})
let myArr = []
const chained = myArr.filter().map()

console.log(chainedNums)