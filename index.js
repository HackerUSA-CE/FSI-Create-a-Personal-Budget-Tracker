let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

/*
const askQuestion = [
    [weeklyExpenseQuestions],
    [monthlyExpenseQuestions],
    [annualExpenseQuestions]
]

// Your Code Here
window.prompt(askQuestion[0])
console.log(askQuestion[0])

let answer = window.prompt(askQuestion[0])
console.log(answer)

let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
*/

/*
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {

    let answer1 = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
console.log(answer1)

    weeklyExpenses = weeklyExpenses + answer1

    let answer2 = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer2)
    
    monthlyExpenses = monthlyExpenses + answer2

    let answer3 = parseFloat(window.prompt(annualExpenseQuestions[i]))
console.log(answer3)

    annualExpenses = annualExpenses + answer3

}
*/

// BONUS
let i = 0;
while (i < weeklyExpenseQuestions.length) {
    
    let answer1 = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
     console.log(answer1)
    weeklyExpenses = weeklyExpenses + answer1
        
    let answer2 = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    console.log(answer2)
    monthlyExpenses = monthlyExpenses + answer2

    let answer3 = parseFloat(window.prompt(annualExpenseQuestions[i]))
    console.log(answer3)
    annualExpenses = annualExpenses + answer3

        i++;
}