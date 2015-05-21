var correctAnswers = 0;


var questionOne = prompt("How many states are in the US? " + correctAnswers);
  
if (questionOne == 50){
  correctAnswers += 1;
}else{
  alert("I'm sorry that was incorrect. The answer was 50.");
}

var questionTwo = prompt("What is cold, wet, and white? " + correctAnswers);
  
if (questionTwo.toLowerCase() === 'snow') {
  correctAnswers += 1;
}else{
  alert("No, that's wrong. The answer is snow.");
}

var questionThree = prompt("Where do I work? " + correctAnswers);
if (questionThree.toLowerCase() === "alliance data") {
  
  correctAnswers += 1;
  
}else{
  alert("Nope. I work at Alliance Data.");
}

 var questionFour = prompt("Who is our current president? " + correctAnswers);
   
if (questionFour.toLowerCase() === "barrack obama") {
   correctAnswers += 1;
}else{
  alert("Nada. The answer was Barrack Obama.");
}

var questionFive = prompt("What do cows drink? " + correctAnswers);
 
if (questionFive.toLowerCase() === "water") {
  correctAnswers += 1;
  
}else if(questionFive === "milk"){
  alert("If you said milk, then you are a silly goose! :)");
}else{
  alert("Cows drink water...");
}

if (correctAnswers === 5) {
  alert("Congrats! you answer all five questions correctly! Here's a Gold Crown!");
}else if (correctAnswers == 3 || correctAnswers == 4) {
  alert("Good Job! You get a Sliver Crown!");
  }else if(correctAnswers == 2 || correctAnswers > 0 ) {
    alert("You get a Bronze Crown. That earns a pat on the back!");
  }else{
    alert("You do not have a single correct answer. Better luck next time!");
  }
  