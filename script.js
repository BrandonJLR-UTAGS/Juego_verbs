const fruits=['blackberry','apple'];

fruits.push('mango')
fruits.sort()
fruits[0]

const showVerb=document.getElementById('ShowVerb');
const showImage=document.getElementById('ShowImage');
const showAudio=document.getElementById('ShowAudio');
const first_verb=document.getElementById('first-verb');
const second_verb=document.getElementById('second-verb');
const third_verb=document.getElementById('third-verb');
const fourth_verb=document.getElementById('fourth-verb');
const next=document.getElementById('next');
const verbsCounter=document.getElementById('verbs-counter');
const allRightCounter=document.getElementById('all-right-answers');
const verbsContainer=document.getElementById('verbs-container');

const numberOfVerbs = verbs.length;

let answersRoullete= [0,1,1,1];
let positionsOfVerbs=[];
let rightAnswer;
let allRighAnswer;

next.addEventListener('click',function(){
    next.style.display='none';
    showVerb.innerHTML="Deposita 200 bits";
});


makeRandomList();

let lastPosition=positionsOfVerbs=length-1;

function makeRandomList(){
    for(var i=0; i<numberOfVerbs;i++){
        positionsOfVerbs.push(i);
    }
    positionsOfVerbs=positionsOfVerbs.sort(()=>Math.random()-0.5);
}

function buttonEffect(itsRight,button){
    if(itsRight){
        button.classList.add('rightAnswer');
        setTimeout(function(){
            button.classList.remove('rightAnswer');

        },1000);
        rightAnswerCounter=rightAnswerCounter+1;
    }else{
        button.classList.add('WrongAnswer');
        setTimeout(function(){
            button.classList.remove('WrongAnswer');

        },1000);
       
    }
    setTimeout(function(){
        ponerVerbo();
    },1000);
}

first_verb.addEventListener('click', function(){
    buttonEffect(isItRight_(first_verb.innerHTML),this);
});

second_verb.addEventListener('click', function(){
    buttonEffect(isItRight_(second_verb.innerHTML),this);
});

third_verb.addEventListener('click', function(){
    buttonEffect(isItRight_(third_verb.innerHTML),this);
});

fourth_verb.addEventListener('click', function(){
    buttonEffect(isItRight_(fourth_verb.innerHTML),this);
});

function shuffleAnswer(array){
    let numberOfAnswerButtons=array.length;
    let randomIndex;
    while (numberOfAnswerButtons !=0){
        randomIndex= Math.floor(Math.random()*numberOfAnswerButtons);
        numberOfAnswerButtons--; 
        [array[numberOfAnswerButtons],array[randomIndex]]=[array[randomIndex],array[numberOfAnswerButtons]]   
    
    }
    return array;
}

