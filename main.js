const questions = [
  {
    question: "¿Quién creó el acelerador de partículas?",
    options: [
      "Albert Einstein",
      "Niels Bohr",
      "Marie Curie",
      "Ernest Lawrence",
    ],
    correctAnswer: "Ernest Lawrence",
  },
  {
    question: "¿Qué elemento químico tiene el símbolo 'Fe'?",
    options: ["Oro", "Hierro", "Plata", "Cobre"],
    correctAnswer: "Hierro",
  },
  {
    question: "¿Cuál es la fórmula química del agua?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correctAnswer: "H2O",
  },

  {
    question:"¿Cuál es el proceso por el cual las plantas convierten la luz solar en energía química?",
    options:["Radiación","Fotosintesis","Transpiración","Respiración celular"],
    correctAnswer:"Fotosintesis",
  },

  {
    question:"¿Cuál es el hueso más largo del cuerpo humano?",
    options:["Humero","Tibia","Esternón","Fémur"],
    correctAnswer:"Fémur",
  },

  {
    question:"¿Cuál de las siguientes NO es una forma de representar números en el ordenador?",
    options:["Decimal","Fraccional","Binario","Hexadecimal"],
    correctAnswer:"Fraccional",
  },

  {
    question:"¿Cual de las siguientes es una estructura de datos utilizada para representar de uno a muchos?",
    options:["Stack","Set","Cola","Array"],
    correctAnswer:"Cola",
  },

  {
    question:"¿Qué siglas representan la abreviatura 'HTTP' en informática?",
    options:["Hyper Text Transfer Protocol Secure","Hyper Terminal Transfer Process","Hyper Text Transfer Protocol","Hyper Text Transformation Protocol"],
    correctAnswer:"Hyper Text Transfer Protocol",
  },

  {
    question:"¿Qué es un Sistema Operativo?",
    options:["Lenguaje de programación","Programa antivirus","Un software que gestiona los recursos del hardware y proporciona servicios a los programas de aplicación","es un IDE"],
    correctAnswer:"Un software que gestiona los recursos del hardware y proporciona servicios a los programas de aplicación",
  },

  {
    question:"¿Qué es una base de datos relacional?",
    options:["Un lenguaje de marcado","Es un tipo de base de datos que esta diseñada para escalar horizontalmente y admite esquemas flexibles","Un tipo de base de datos que organiza los datos en tablas relacionadas","Es un tipo de base de datos que permite manejar diferentes modelos de datos."],
    correctAnswer:"Un tipo de base de datos que organiza los datos en tablas relacionadas",
  }

];

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
        const startContainer = document.getElementById("startContainer");
        startContainer.style.display = "none";
        const quizContainer = document.getElementById("quizContainer");
        quizContainer.style.display = "block";

        showQuestion();
    }
    
function initializeQuiz() {
    const startButton = document.createElement("button");
    startButton.textContent = "Iniciar Quiz";
    startButton.className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    startButton.onclick = startQuiz;
    
    const startContainer = document.getElementById("startContainer");
    startContainer.appendChild(startButton);

}
 


window.onload = initializeQuiz;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById(
    "question"
  ).innerHTML = `<h1>${currentQuestion.question}</h1>`;

  const optionsContainer = document.getElementById("opcions");
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className =
      "bg-gray-200 hover:bg-indigo-200 text-gray-800 py-2 px-4 rounded-md shadow-md";
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });

  document.getElementById("counter").textContent = `Pregunta: ${
    currentQuestionIndex + 1
  }/${questions.length}`;
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll("#opcions button");

  optionButtons.forEach((button) => {
    button.disabled = true; // Deshabilitar todos los botones de opciones para evitar más selecciones
    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("bg-green-400"); // Si es la respuesta correcta, añadir color verde al fondo
      if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
      }
    } else if (button.textContent === selectedAnswer) {
      button.classList.add("bg-red-400"); // Si es la respuesta seleccionada por el usuario (incorrecta), añadir color rojo al fondo
    }
  });

  // Deshabilitar el botón "Siguiente" hasta que se haya seleccionado una respuesta
  document.getElementById("nextButton").disabled = false;
}

// Deshabilitar todos los botones de opciones para evitar que se seleccione otra respuesta
const optionButtons = document.querySelectorAll("#opcions button");
optionButtons.forEach((button) => {
  button.disabled = true;
});
/* Avanzar a la siguiente pregunta*/
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

/* El boton usara la función nextQuestion */
document.getElementById("nextButton").addEventListener("click", nextQuestion);

function showResult() {
    document.getElementById("question").style.display = "none";
    document.getElementById("opcions").style.display = "none";
    document.getElementById("counter").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
  
    const resultContainer = document.getElementById("score");
    const congratulatoryMessage = "¡¡Has completado el QUIZ, felicidades!!";
    const scoreMessage = `Puntuación final: ${score} de ${questions.length}`;
  
    resultContainer.innerHTML = `${scoreMessage}<br><br>${congratulatoryMessage}`;
  }
  

