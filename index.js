
const submit = document.getElementById("mysubmit");
const text = document.getElementById("mytext");
const output = document.getElementById("myh1");
const mintext = document.getElementById("min");
const maxtext = document.getElementById("max");
const range = document.getElementById("range");
let answer;
let min;
let max;
let guess;
let attempts = 0;
let running = true;

range.onclick = function(){
     min = Number(mintext.value);
     max = Number(maxtext.value);
     answer = min + Math.floor(Math.random() * (max - min + 1));
}

submit.onclick = function(){


    
    guess = text.value;
    guess = Number(guess);

    if(isNaN(guess)){
        output.textContent = "That is not a number try again";
    }
    else if( guess > max){
        output.textContent = "That is way too high of a number";
    }
    else if( guess < min){
        output.textContent = "That is way too low of a number";
    }
    else{
        attempts++;
        if(guess < answer){
            output.textContent = "Too low, try again";
        }
        else if(guess > answer){
            output.textContent = "Too high, try again";
        }
        else{
            output.textContent = `Correct! The answer was ${answer} and it took you ${attempts} tries`;

        }

    }


}
