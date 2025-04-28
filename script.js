let questions = [


        {
          "frage": "Welcher Planet in unserem Sonnensystem ist der Erde am nächsten?",
          "antwort_1": "Mars",
          "antwort_2": "Venus",
          "antwort_3": "Jupiter",
          "antwort_4": "Merkur",
          "richtige_antwort_index": 1
        },
        {
          "frage": "Wer malte die Mona Lisa?",
          "antwort_1": "Vincent van Gogh",
          "antwort_2": "Pablo Picasso",
          "antwort_3": "Leonardo da Vinci",
          "antwort_4": "Michelangelo",
          "richtige_antwort_index": 2
        },
        {
          "frage": "Was ist die Hauptstadt von Australien?",
          "antwort_1": "Sydney",
          "antwort_2": "Melbourne",
          "antwort_3": "Canberra",
          "antwort_4": "Perth",
          "richtige_antwort_index": 2
        },
        {
          "frage": "Welches Element hat das chemische Symbol 'O'?",
          "antwort_1": "Gold",
          "antwort_2": "Eisen",
          "antwort_3": "Sauerstoff",
          "antwort_4": "Silber",
          "richtige_antwort_index": 2
        },
        {
          "frage": "In welchem Jahr begann der Zweite Weltkrieg?",
          "antwort_1": "1935",
          "antwort_2": "1939",
          "antwort_3": "1941",
          "antwort_4": "1945",
          "richtige_antwort_index": 1
        },
        {
          "frage": "Welches Säugetier ist das größte Tier der Welt?",
          "antwort_1": "Afrikanischer Elefant",
          "antwort_2": "Blauwal",
          "antwort_3": "Giraffe",
          "antwort_4": "Nashorn",
          "richtige_antwort_index": 1
        },
        {
          "frage": "Wer schrieb das Theaterstück 'Romeo und Julia'?",
          "antwort_1": "Charles Dickens",
          "antwort_2": "Jane Austen",
          "antwort_3": "William Shakespeare",
          "antwort_4": "George Bernard Shaw",
          "richtige_antwort_index": 2
        },
        {
          "frage": "Welche Farbe hat die französische Flagge nicht?",
          "antwort_1": "Blau",
          "antwort_2": "Weiß",
          "antwort_3": "Rot",
          "antwort_4": "Gelb",
          "richtige_antwort_index": 3
        },
        {
          "frage": "Wie viele Kontinente gibt es auf der Erde?",
          "antwort_1": "5",
          "antwort_2": "6",
          "antwort_3": "7",
          "antwort_4": "8",
          "richtige_antwort_index": 2
        },
        {
          "frage": "Welches ist das kälteste Element im Periodensystem?",
          "antwort_1": "Stickstoff",
          "antwort_2": "Helium",
          "antwort_3": "Neon",
          "antwort_4": "Argon",
          "richtige_antwort_index": 1
        }
];

let currentQuestion =0;
let rightQuestions =0;
let audioSucces = new Audio('assets/sounds/success-1-6297.mp3');
let audioFail = new Audio('assets/sounds/fail-144746.mp3');

function init(){
    document.getElementById('question-count').innerHTML = questions.length;
    showQuestion();
    document.getElementById('next-button').disabled = true;
    simpleMath();
    
}

function showQuestion(){
  if(currentQuestion >= questions.length){
    showEndscreen();
  }else{
    simpleMath();
    showNextQuestion();
  }
}

function showEndscreen(){
    document.getElementById('endScreen').style="";
    document.getElementById('quizbody').style = "display: none";
    document.getElementById('all-questions').innerHTML= questions.length;
    document.getElementById('right-answer').innerHTML = rightQuestions;
    document.getElementById('header-img').style ="display: none";
}

function showNextQuestion(){
  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['frage'];
  document.getElementById('answer_1').innerHTML=question['antwort_1'];
  document.getElementById('answer_2').innerHTML=question['antwort_2'];
  document.getElementById('answer_3').innerHTML=question['antwort_3'];
  document.getElementById('answer_4').innerHTML=question['antwort_4'];
}

function answer(selection){
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question.richtige_antwort_index}`;
  console.log(idOfRightAnswer);
  if(selectedQuestionNumber== question['richtige_antwort_index']){
      trueAnswer(selection);
  }else{
      wrongAnswer(selection,idOfRightAnswer);
  }
    document.getElementById('next-button').disabled = false;
}

function trueAnswer(selection){
    document.getElementById(selection).parentNode.classList.add('bg-success');
    rightQuestions ++;
    audioSucces.play();
};

function wrongAnswer(selection,idOfRightAnswer){
  document.getElementById(selection).parentNode.classList.add('bg-danger');
  document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  audioFail.play();
};

function disabledBtn(){
  let next = document.getElementById('next-button');
  next.disabled =false;
}

function nextQuestion(){
  currentQuestion ++;
  let count =document.getElementById('actual-count');
  count.innerText =currentQuestion +1;
  showQuestion();
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
}

function resetAnswerButtons(){
  document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_1').parentNode.classList.remove('bg-success');
  document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success');
  document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success');
  document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function simpleMath(){
  
  let percent = (currentQuestion +1 ) /questions.length;
  percent =percent *100;
  document.getElementById('progress-bar').innerHTML = `${percent} %`;
  document.getElementById('progress-bar').style = `width: ${percent}%`;

}

function newGame(){
  document.getElementById('header-img').src = '/assets/img/Ai-Quiz.jpeg'
  document.getElementById('actual-count').innerText = 1;
  rightQuestions = 0;
  currentQuestion = 0;
  document.getElementById('header-img').style = "";
  document.getElementById('quizbody').style = "";
  document.getElementById('endScreen').style = "display: none";
  init();

}