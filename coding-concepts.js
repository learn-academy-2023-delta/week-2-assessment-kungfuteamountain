// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
 console.log(cohort.split(""))

// a) Your answer:

// 'D' 'e' 'l' 't' 'a' '2' '0' '2' '3'

// b) Verify and explain:es, "", indactes the selction to be every character
// .split with closed quot
// 'D', 'e', 'l', 't',
// 'a', ' ', '2', '0',
// '2', '3'

// i forgot that it would pickup  the space (" ").

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:

// 'Hello, Learn Student!'
//'learn student' is the argument that is passed in the greeter function, in place of its parameter (name)

// b) Verify and explain:
//undefined
// deosnt have a return.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:

// [8, 10, 12, 14, 16]

// b) Verify and explain:
// [ 8, 10, 12, 14, 16 ]
 //simlar to a for loop, each number in this array will be multiplied by 2 and returned.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:

// [11, 13, 15]

// b) Verify and explain:

//[11, 13, 15]
// flter holds returns the value of each index is the onlyOdds array that is not divisible by 2.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:

// "JavaScript"

// b) Verify and explain:
// JavaScript
// .language on the function allows [0] select Javascript from the languages array

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:

// 'George Delta 2023'
//i dont know why, but const learnStudent set equal to 'new' Learn with the input of George puts "George" where name is  and outputs the whole, new object. i dont undetstand why it knows that 'george' i a name other than that 'name' being in string makes it expect a string and 'george' is in string form. i dont know why name is dynamic and 'delta' isnt but i remember from class, similar if not exact example.node

// b) Verify and explain:
// Learn { student: 'George', cohort: 'Delta', year: 2023 }



//   'D', 'e', 'l', 't',
//   'a', ' ', '2', '0',
//   '2', '3'
// ]
// undefined
// [ 8, 10, 12, 14, 16 ]
// [ 11, 13, 15 ]
// JavaScript
// Learn { student: 'George', cohort: 'Delta', year: 2023 }