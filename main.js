// Tarjeta
const card = document.querySelector('#card');
const logoCard = document.getElementById('logo-card');
const numberCard = document.querySelector('#card .number-card');
const nameCard = document.querySelector('#card .name-card');
const mounthExpirationCard = document.querySelector('#card .mounth-expiration-card');
const yearExpirationCard = document.querySelector('#card .year-expiration-card');
const firmCard = document.querySelector('#card .firm-card p');
const ccvCard = document.querySelector('#card .ccv-card');

// Formulario Tarjeta
const btnOpenForm = document.getElementById('btn-open-form-card');
const formCard = document.getElementById('form-card');
const numberCardForm = document.getElementById('number-card-form');
const nameCardForm = document.getElementById('name-card-form');
const selectMounthCardForm = document.getElementById('mounth-expiration-card-form');
const selectYearCardForm = document.getElementById('year-expiration-card-form');
const ccvCardForm = document.getElementById('ccv-card-form');

const showFrontCard = () => {
    if ( card.classList.contains('active') ) {
        card.classList.remove('active');
    }
}

// Rotación de la tarjeta
card.addEventListener('click', () => {
    card.classList.toggle('active');
});

// Abrir formulario
btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active');
    formCard.classList.toggle('active');
});

// Llenar el select del mes dinamicamente
for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    selectMounthCardForm.appendChild(option);
}

// Llenar el select del año dinamicamente
let currentYear = new Date().getFullYear();

for (let i = currentYear; i <= currentYear + 8; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    selectYearCardForm.appendChild(option);
}

// Número de tarjeta
numberCardForm.addEventListener('keyup', e => {
    let valueNumberCardForm = e.target.value
        // Eliminar espacios en blanco
        .replace(/\s/g, '')
        // Eliminar todos los caracteres que no sean números del 0 al 9
        .replace(/\D/g, '')
        // Colocamos espacio cada cuatro caracteres
        .replace(/([0-9]{4})/g, '$1 ')
        .trim();
    numberCardForm.value = valueNumberCardForm;

    numberCard.textContent = valueNumberCardForm;

    if ( valueNumberCardForm === '' ) {
        numberCard.textContent = '#### #### #### ####';
       
    }

    

    // Voltear la tarjeta para que el usuario vea el frente
    showFrontCard();

});

// Formulario nombre tarjeta
nameCardForm.addEventListener('keyup', e => {
    let valueNameCardForm = e.target.value.replace(/[0-9]/g, '');

    nameCardForm.value = valueNameCardForm;
    nameCard.textContent = valueNameCardForm;
  

    if ( valueNameCardForm === '' ) {
        nameCard.textContent = 'John Doe';
    }

    showFrontCard();
});

// Select mes
selectMounthCardForm.addEventListener('change', e => {
    mounthExpirationCard.textContent = e.target.value;
    showFrontCard();
});


// Select año
selectYearCardForm.addEventListener('change', e => {
    yearExpirationCard.textContent = e.target.value.slice(2);
    showFrontCard();
});

// Ccv
ccvCardForm.addEventListener('keyup', e => {
    if ( !card.classList.contains('active') ) {
        card.classList.add('active');
    }

    ccvCardForm.value = ccvCardForm.value
        // Eliminar espacios en blanco
        .replace(/\s/g, '')
        // Eliminar todos los caracteres que no sean números del 0 al 9
        .replace(/\D/g, '');

    ccvCard.textContent = ccvCardForm.value;
});

const btn = document.getElementById("modalBtn");

const popShow = document.getElementById("thisModal");

const closePop = document.querySelector(".close");




function checkInputs() {
     {
      const popShow = document.getElementById('popShow');
      popShow.classList.add('active');
    }
  }

  btn.addEventListener('click', function(){
    const cardNumberInput = document.getElementById('number-card-form');
    const nameCardHolderInput = document.getElementById('name-card-form');
    const monthExpirationInput = document.getElementById('mounth-expiration-card-form');
    const yearExpirationInput = document.getElementById('year-expiration-card-form');
    const ccvInput = document.getElementById('ccv-card-form');
  
    const cardNumber = "2021 2223 2425 2627";
    const nameCardHolder = "International Card";
    const monthExpiration = 2;
    const yearExpiration = 2025;
    const ccv = "546";

    console.log((cardNumberInput.value === cardNumber));
    console.log((nameCardHolderInput.value === nameCardHolder));
    console.log((Number(monthExpirationInput.value) === monthExpiration));
    console.log((Number(yearExpirationInput.value) === yearExpiration));
    console.log((ccvInput.value === ccv));

  
    if ((cardNumberInput.value === cardNumber) && (nameCardHolderInput.value === nameCardHolder) && (Number(monthExpirationInput.value) === monthExpiration) && (Number(yearExpirationInput.value) === yearExpiration) && (ccvInput.value === ccv)){
            popShow.classList.add('active');
        }
  });
  


  
//--QUIZ
// Récupérer le formulaire de quiz et ajouter un événement de soumission
// Function to show toast message
function showToast(message, type) {
    var toastContainer = document.getElementById("toast-container");
    var toast = document.getElementById("toast");

    // Set toast message and type
    toast.innerHTML = message;
    toast.className = "toast-" + type;

    // Show toast message
    toast.style.opacity = 1;

    // Hide toast message after 3 seconds
    setTimeout(function() {
        toast.style.opacity = 0;
    }, 10000);
}

// Quiz form submit event listener
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get selected answer value
    var selectedAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Check if selected answer is correct
    if (selectedAnswer === "true") {
        showToast("Good answer.The hint : To ensure the security of your transaction, your card is protected by a unique code. Remember, your code starts with '20' and ends with '27'. Keep this in mind when filling out the form and unlocking the next step!", "success");
    } else {
        showToast("Wrong answer,please try again !", "error");
    }
});

document.getElementById("quiz-form2").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get selected answer value
    var selectedAnswer = document.querySelector('input[name="quiz2"]:checked').value;

    // Check if selected answer is correct
    if (selectedAnswer === "true") {
        showToast("Good answer. The hint : Amen Bank has created this \"International Card\" to enable you to conduct secure transactions ", "success");
    } else {
        showToast("Wrong answer,please try again !", "error");
    }
});

document.getElementById("quiz-form3").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get selected answer value
    var selectedAnswer = document.querySelector('input[name="quiz3"]:checked').value;

    // Check if selected answer is correct
    if (selectedAnswer === "true") {
        showToast("Gooad answer.The hint : Don't miss out on the latest payment card from Amen Bank! This card is the most recent addition to their collection,but you only have exactly two years to take advantage of its benefits before it expires in the same month." +
            " Be sure to use it while you can, and don't wait until it's too late!", "success");
    } else {
        showToast("Wrong answer,please try again !", "error");
    }
});

