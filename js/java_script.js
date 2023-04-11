
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

// getting questions and options from array
function displayquetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let questiontag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let optiontag = '<div class="option">'+ questions[index].options[0] +'</div>'
    + '<div class="option">'+ questions[index].options[1] +'</div>'
    + '<div class="option">'+ questions[index].options[2] +'</div>'
    + '<div class="option">'+ questions[index].options[3] +'</div>';
    que_text.innerHTML = questiontag; //adding new span tag inside que_tag
    option_list.innerHTML = optiontag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

