const uli= document.querySelector(".guessed-letters");
const button=document.querySelector(".guess");
const text=document.querySelector(".letter");
const p1=document.querySelector(".word-in-progress");
const p=document.querySelector(".remaining");
const span=document.querySelector(".remaining span");
const para=document.querySelector(".message");
const hbutton=document.querySelector(".play-again hide");
const word="magnolia";
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
        }
        
    console.log(guessedLetters);
}
