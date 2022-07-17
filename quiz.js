//bringing into the browser
function buildQuiz(){
    const output= [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers= [];
        for(let letter in currentQuestion.answers){
            answers.push(
                `<label>
                    <input type='radio' name='question${questionNumber}' value="${letter}">
                    ${letter} : 
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
         ` <div class="slide">
                <div class='question'> ${currentQuestion.question}</div>
                <div class='answers'>${answers.join(' ')} </div>
            </div>`
        );
     }
  );
   container.innerHTML = output.join(' ');
 }

function showResults(){
    const answerContainers= container.querySelectorAll('.answers');
    let numCorrect= 0;
    myQuestions.forEach((currentQuestion, questionNumber) =>{
        const answerContainer = answerContainers[questionNumber];
        const selector= `input[name=question${questionNumber}]:checked`; //selector refers to input value of radio button used to identify user's selection
        const userAnswer= (answerContainer.querySelector(selector) || {}).value; //.value takes the value of the selection
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
        }
     
    });
    answerContainers.innerHTML = `${numCorrect} out of ${myQuestions.length} `;
}

function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add()
}


const container= document.getElementById('quiz')
const results= document.getElementById('results')
const submitButton=document.getElementById('submit')
const myQuestions=[
    {
        question: "Who was accused of going to Bass Lake while their dying fiance received cancer treatment?",
        answers: {
            a: "Vicki",
            b: "Tamra ",
            c: "Gretchen",
            d: "Heather"
        },
        correctAnswer: "c"
    },
    {
        question: "Which housewife was revealed to be in need of a home after a white refridgerator was discovered in their rental apartment? ",
        answers: {
            a: "Portia",
            b: "Kenya",
            c: "Kim",
            d: "Kandi"
         },
         correctAnswer: "b"
    },
    {
        question: "Who is Gwyneth?",
        answers: {
            a: "Ramona's 'help'",
            b: "Sonja's intern",
            c: "Carol's ghostwriter",
            d: "Kelly's friend"
        },
        correctAnswer: 'd'
    },
    {
        question: "How long was Tom unconscious for?",
        answers: {
            a: "12 hours",
            b: "9 hours",
            c: "He broke his ankle",
            d: "He is still unconscious"
        },
        correctAnswer: "a, b, c, d"
    },
    {
        question: "Who is formally referred to as Wig?",
        answers: {
            a: "Kim",
            b: "Rinna",
            c: "Kern", 
            d: "Adrienne"
        },
        correctAnswer: "a"
    },
    {
        question: "Who did not acknowledge the birth of their nephew?",
        answers: {
            a: "Danielle",
            b: "Teresa",
            c: "Melissa",
            d: "Kathy"
        },
        correctAnswer: 'b' 
    },
    {
        question: "Ashley Darby was invited into someone's home and offered a beverage. Who's home was it?",
        answers: {
            a: "Candice's",
            b: "Karen's",
            c: "Robin's",
            d: "Ms.Dorothy's"
        },
        correctAnswer: "d"
    },
    {
        question: "Who's hands are 'just hands'?",
        answers: {
            a:"Brandy's",
            b:"LeAnne's",
            c:"Kelly's",
            d:"Dorinda's"
        },
        correctAnswer: "b"
    },
    {
        question: "'Turtle Time' is typically initiated with the consumption of which beverage?",
        answers: {
            a: "Pinot Grigio",
            b:"Rose",
            c:"Dirty Martini",
            d:"Skinny Margarita"
        },
        correctAnswer: "a"
    },
    {
        question: "Who hosted the infamous game night where Kim was accused of  'doing crystal meth in the bathroom' all night?",
        answers: {
            a: "Eileen",
            b: "Pam",
            c:"Dana",
            d:"Yolanda"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was engaged 19 times?",
        answers: {
            a: "Danielle",
            b: "Melissa",
            c: "Kim D",
            d: "Dina"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the 'broken whore' who attended Hampton University?",
        answers: {
            a: "Wendy",
            b:  "Mia",
            c: "Candice",
            d: "Gizelle"
        },
        correctAnswer: "d"
    },
    {
        question: "Who's children received the infamous eviction notice?",
        answers: {
            a: "Gina",
            b: "Lynne",
            c: "Tamra",
            d: "Slade"
        },
        correctAnswer: "b"
    },
    {
        question: "Who's husband gets serviced at round-ups?",
        answers: {
            a: "Brandi's",
            b: "Stephanie's",
            c: "Cary",
            d: "LeAnne's"
        },
        correctAnswer: "c"
    },
    {
        question: "What smells like hospital?",
        answers: {
            a:"Brook's Athleisure",
            b:"The limo",
            c:"Mary's church",
            d:"Jen Shah"
        },
        correctAnswer: "d"
    }
];


 buildQuiz(); //runs as soon as page is loaded 

//pagination process that separates questions how they appear in broswer

const previousButton=document.getElementById('previous');
const nextButton=document.getElementById('next');
const slides= document.querySelectorAll('.slide');
let currentSlide=0;

showSlide(currentSlide)

 submitButton.addEventListener('click', showResults());


