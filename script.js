const quizDb= [

{
question:"Q1: Which type of JavaScript language is ___?",
a: "Object-Oriented",
b: "Object-Based",
c: "Assembly-language",
d: "High-level",
ans: "ans2"
},
{

    question:"Q2: Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    ans: "ans4"



},
{
    question:"Q3: In JavaScript, what is a block of statement?",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    ans: "ans2"


},
{
    question:"Q4: When interpreter encounters an empty statements, what it will do:",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    ans: "ans4"


},
{
question:"Q5: The 'function' and 'var' are known as: ",
a:"Keywords ",
b: "Data types ",
c: "Declaration statements ",
d:" Prototypes",
ans : "ans3"
},
{
question:"Q6: Which of the following variables takes precedence over the others if the names are the same?",
a:"Global variable ",
b:"The local element ",
c:"The two of the above",
d:"None of the above ",
ans: "ans2"
},
{
    question:"Q7: Which one of the following is the correct way for calling the JavaScript code? ",
a:"Preprocessor ",
b:"Triggering Event ",
c:"RMI ",
d:"Function/Method ",
ans: "ans4"
},
{
question:"Q8: Which of the following type of a variable is volatile?",
a:" Mutable variable",
b:"Dynamic variable ",
c:"VImmutable variable",
ans: "ans1"
},
{
question:"Q9: In the JavaScript, which one of the following is not considered as an error:",
a:"Syntax error ",
b:"Missing of semicolons ",
c:"Division by zero ",
d:"Missing of Bracket ",
ans: "ans3"
}
]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const questions = document.querySelector(".questions"); // Question ka reference 
const option1 = document.querySelector("#option1"); // option ka reference
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");// submit ka reference 
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let questionCount =0;
let score=0;
const loadQuestion = ()=>{
    const questionList  = quizDb[questionCount];
    questions.innerHTML= questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

};
loadQuestion();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getCheckAnswer= ()=>{
    let answer ;

    answers.forEach((curAnsEle)=> {
        if(curAnsEle.checked){ // checked is predefined if checked then true jo check hoga wo usi id chaheye 
            answer = curAnsEle.id;
        }
    });
    return answer; // answer cointain id of checked element which we have selected 
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deSelectAll = () =>{      // remove checked when we go to next question 
answers.forEach((curAnsEle)=>{
    curAnsEle.checked = false;
});
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer(); // return id of selected answer 

    if(checkedAnswer==null){ // my own code if no option is selected 
        return alert("Please select any option");
    };
    if(checkedAnswer == quizDb[questionCount].ans){ // compare selected answer id to ans to our array
        score++;
    };
    questionCount++;

    deSelectAll(); // for removce selection 
    
    if(questionCount< quizDb.length){
        loadQuestion(); /// AGAIN CALL LOAD  QUESTION
    }else{
        showScore.innerHTML = ` 
        <h3> You Scored ${score}/${quizDb.length} 🏅 </h3>
        <button class="btn" onClick="location.reload()"> Play Again</button>
        
         `;

         showScore.classList.remove('scoreArea');// remove showArea so display will be not none 
    }
});