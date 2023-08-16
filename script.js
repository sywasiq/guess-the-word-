const uli= document.querySelector(".guessed-letters");
const button=document.querySelector(".guess");
const text=document.querySelector(".letter");
const p1=document.querySelector(".word-in-progress");
const p=document.querySelector(".remaining");
const span=document.querySelector(".remaining span");
const para=document.querySelector(".message");
const hbutton=document.querySelector(".play-again hide");
const word="magnolis";
var remainingGuesses=8;
const guessedLetters=[];
const wordsin=function(word){
    
    const array=[];
    for(let i of word){
    array.push("●");
}
p1.innerText=array.join("");
};
wordsin(word);
button.addEventListener("click",function(e){
    e.preventDefault();
    let inp=text.value;
    console.log(inp);
    text.value="";
    para.innerText="";
    valid(inp);
    makeGuess(inp);
});
const valid=function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if(input.length==0){
para.innerText="Please enter the input";
    }
    else if (input.length>1){
para.innerText="please enter only one character"
    }
    else if(!input.match(acceptedLetter)){
para.innerText="please enter one letter from a to z";
    }
    return input;
}
const makeGuess=function(letter){
    const temp=letter.toUpperCase();
    if(guessedLetters.includes(temp)){
            para.innerText="You have already guessed this letter";
        }
        else{
            guessedLetters.push(temp);
            
            update(temp);
            updateprogress(guessedLetters);
            guess_input(temp);
        }
        
    console.log(guessedLetters);
}
const update=function(){
    uli.innerHTML="";
    for(let i of guessedLetters){
        let newl=document.createElement("li");
        newl.innerText=i;
        uli.append(newl);
    }
}
const updateprogress=function(guessedLetters){
    const wordUpper=word.toUpperCase();
    const wordArray= wordUpper.split("");
    console.log(wordArray);
    const newarray=[];
    for(let i of guessedLetters){
    if (wordArray.includes(i)){
        newarray.push(i);
    }
    }
    p1.innerText=newarray.join("");
verify();
}
//next repo
updateprogress(guessedLetters);
const guess_input=function(guess){
    const word_Upper=word.toUpperCase();
    if(!word_Upper.includes(guess)){
para.innerText="this letter is not in the word";
remainingGuesses= remainingGuesses-1;
    }
    else{
        para.innerText="your guess is correct";
    }

   if (remainingGuesses==0){
para.innerText=="there is no guess left.game is over";
    }
else if(remainingGuesses==1){
    para.innerText="you have 1 guess left";
}
else{
    para.innerText=`you have ${remainingGuesses} left`;
}

    
}
const verify=function(){
    if(p1.innerText==word){
para.classList.add("win");
para.innerHTML='<p class="highlight">You guessed correct the word! Congrats!</p>'
    }

}


