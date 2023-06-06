// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

//function: *3 multBy3 const multBy3 => () { }
//input: array
//return array.multBy3

// a) Create a test with expect statements for each of the variables provided.

//

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]


const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
//const threeDivide=() => {
// [object] %3 == 0
// }
// console.log(threeDivide[object])
//

// a) Create a test with expect statements for each of the variables provided.

describe("threeDivide" () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
      expect(threeDivide(object1)).toEqual("15 is divisible by three")
      expect(threeDivide(object2)).toEqual("0 is divisible by three")
      expect(threeDivide(object3)).toEqual("-7 is not divisible by three")
    })
  })

const threeDivide=(object) => { 
//  object.number  %3 == 0  
   if( object.number  %3 == 0  )
    return object.number + " is divisible by three"
   else
    return object.number + " is not divisible by three"
}

//  line 59 is the first set of scenerio sought after.
// checking for a remainder when dividing the object value by 3.
// upon discovery of a zero remainder output is set to the value of the oject + the string 'is divisble by 3'
// in the event that the alternate result it unfavorable, execute backup procedure. 


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//.toUpperCase const bigLetters=(word) => {}
//for each (word) index in randomNoun array turn into a string
//                          
// take off first letter toUppase first letter then .join the rest of the word.



// a) Create a test with expect statements for each of the variables provided.
describe("bigLetters" () => {
      it("returns an array of Capitallized Words", () => {
        expect(bigLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(bigLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])

      })
 })

 //test result  Jest encountered an unexpected token

    // Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
const bigLetters = (array) => {
 array.slice(0, 1).toUpcase.join "the sliced array"
}
  //    for (i = 0, i <= array.length, i = ++)
  //     let( word)
  //    
  //     return capArray
  // }
  
// Pseudo code:
//i need a for loop 
// for each value of the input array
// filter the first index .toUpperCase // i may need to map
// concat to the rest of the word
// how to add back the sliced off part?

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

const firstVowel = () => {
  
}

// a) Create a test with expect statements for each of the variables provided.
//
describe("firstVowel", () => {
  it("logs the index of the first vowel of a string", () => {
    expect(firstVowel(vowelTester1)).toEqual("1")
    expect(tfirstVowel(vowelTester2)).toEqual("0")
    expect(firstVowel(vowelTester3)).toEqual("2")
  })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

let vowel = "a" || "e"|| "i"|| "o"||"u";
const firstVowel = (word) => {
  return word.indexOf(vowel)
}


// Pseudo code:
//i want or return .indexOf(variable equal to aeiou||AEIOU)
// const vowelSound = "a e i o u || A E I O U"