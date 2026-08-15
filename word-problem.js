// Datatypes: String, Boolean, Variable, Number, Array etc
// Datatypes Methods
// Conditionals: If else statements, switch statement
// Loop: for, while
// Functions

// let day = 9;
// switch (day) {
//     case 1:
//         console.log("IT IS MONDAY!")
//         break;
//     case 2:
//         console.log("IT IS TUESDAY!")
//         break;
//     case 3:
//         console.log("IT IS WEDNESDAY!")
//         break;
//     case 4:

//         console.log("IT IS THURSDAY!")
//         break;

//     case 5:
//         console.log("IT IS FRIDAY!")
//         break;
//     default:
//         console.log(`${day} ?....fuck you* this isn't a day!.`)
// }

let examScore = 20;
let letterGrade;
switch (true) {
    case examScore >= 80:
        letterGrade = "A"
        break;
    case examScore >= 70:
        letterGrade = "B"
        break;

    case examScore >= 60:
        letterGrade = "C"
        break;
    case examScore >= 50:
        letterGrade = "D"
        break;
    case examScore >= 40:
        letterGrade = "E"
        break;
    default:
        letterGrade = "F"
}
console.log(letterGrade)  
// let fruits = ["apple",  "cashew", "watermelon", "coconut"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

