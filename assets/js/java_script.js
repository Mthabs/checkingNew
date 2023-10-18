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
const progression_line = document.querySelector(".quiz_page header .progression_line");
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
continue_btn.onclick = () => {
    questions = getRandomQuestions([...allQuestions]);
    instructions.classList.remove("activeInfo");
    quiz_page.classList.add("activeQuiz");
    showQuestions(question_index);
    queCounter(questionNo);
    startTimer(duration);
    timeText.textContent = "Time Left";
    next_button.classList.remove("show");
    updateProgressionLine();  // Reset progression line at the start of the quiz
}

let duration =  99;
let currentTimeOnLine = 0;
let question_index = 0;
let questionNo = 1;
let userScore = 0;
let counter;
let counterLine;
let length_value = 0;
progressionLine = document.querySelector(".quiz_page header .progression_line");
const restart_quiz = results_page.querySelector(".buttons .restart");
const quit_quiz = results_page.querySelector(".buttons .exit_quiz");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    questions = getRandomQuestions([...allQuestions]);
    resetQuiz("restart", quiz_page, timeText); // Pass quiz_page and timeText as arguments
};

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_button = document.querySelector("footer .next_button");
const bottom_ques_counter = document.querySelector("header .sum_qstn");

// if Next Que button clicked
next_button.onclick = ()=>{
    if(question_index < questions.length - 1){ //if question count is less than total question length
        question_index++; //increment the question_index value
        questionNo++; //increment the questionNo value
        document.getElementById('bonusTime').innerText = "5";
        showQuetions(question_index); //calling showQestions function
        queCounter(questionNo); //passing questionNo value to queCounter
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_button.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
    updateProgressionLine();
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".questionz");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'</div>'
    + '<div class="option">'+ questions[index].options[1] +'</div>'
    + '<div class="option">'+ questions[index].options[2] +'</div>'
    + '<div class="option">'+ questions[index].options[3] +'</div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    resetBonusTime();
}
function resetBonusTime() {
    let bonusTime = 5; // 5 seconds bonus time
    document.getElementById("bonusTime").innerText = bonusTime;
    let bonusTimeCounter = setInterval(function() {
        if(bonusTime > 0) {
            bonusTime--;
            document.getElementById("bonusTime").innerText = bonusTime;
        } else {
            clearInterval(bonusTimeCounter);
        }
    }, 1000);
}

//if user clicked on option
function optionSelected(answer){

    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[question_index].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        console.log("Your correct answers = " + userScore); 
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer =" + userScore)
    }
    
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_button.classList.add("show"); //display the next button if user selected any option
}

function showResult(){
    instructions.classList.remove("activeInfo"); //hide instruction page
    quiz_page.classList.remove("activeQuiz"); //hide quiz page
    results_page.classList.add("activeResult"); //display result box
    const scoreText = results_page.querySelector(".score_text");
    if (userScore > 8){ // if user scored more than 8
        //creating a new span tag and passing the user score numberer and total question numberer
        let scoreTag = '<span>Congratulations!!!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 4){ // if user scored more than 4
        let scoreTag = '<span>Nice!!!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 5
        let scoreTag = '<span>Unfortunately, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            
            const allOptions = option_list.children.length; //getting all option items
        
            let correcAns = questions[question_index].answer; //getting correct answer from array
            
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    console.log("Time Off"); 
                }
            }
        
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
           
            showResult();
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 183);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 699){ //if time value is greater than 699
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question numberer and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}