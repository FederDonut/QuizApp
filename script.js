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

function init(){
    document.getElementById('question-count').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['frage'];

    document.getElementById('answer_1').innerHTML=question['antwort_1'];
    document.getElementById('answer_2').innerHTML=question['antwort_2'];
    document.getElementById('answer_3').innerHTML=question['antwort_3'];
    document.getElementById('answer_4').innerHTML=question['antwort_4'];

}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('Antwort ist ',selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log(Number(selectedQuestionNumber));
    console.log('Current question is', question['richtige_antwort_index']);

    if(selectedQuestionNumber== question['richtige_antwort_index']){
        console.log('richtig');
    }else{
        console.log('falsch');
    }
}