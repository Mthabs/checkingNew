
//selecting all required elements
const start_quiz = document.querySelector(".home_page button");
const instructions = document.querySelector(".instructions");
/*buttons*/
const exit_btn = instructions.querySelector(".buttons .exit_quiz");
const continue_btn = instructions.querySelector(".buttons .restart");
/*Quiz*/
const quiz_page = document.querySelector(".quiz_page");
const timeText = document.querySelector(".clock .show-time");
const timeCount = document.querySelector(".clock .count_down");
const time_line = document.querySelector("header .time_line");
const option_list = document.querySelector(".option_list");
/*result*/ 
const results_page = document.querySelector(".results_page");

// if startQuiz button clicked
start_quiz.onclick = ()=>{
    instructions.classList.add("activeInfo"); //display instruction page
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    instructions.classList.remove("activeInfo"); //hide instruction page
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    instructions.classList.remove("activeInfo"); //hide instruction page
    quiz_page.classList.add("activeQuiz"); //display quiz page
    displayquestions(0); //calling showQestions function
    questioncount(1); //passing 1 parameter to questioncount
    startTimer(99); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let lengthvalue = 0;
let allocated_time =  99;
let participscore = 0;
let question_index = 0;
let questionNo = 1;
let counter;
let counterLine;
