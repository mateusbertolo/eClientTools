// const resultEL = document.getElementById('result');
// const lengthEL = document.getElementById('length');
// const uppercaseEL = document.getElementById('uppercase');
// const lowercaseEL = document.getElementById('lowercase');
// const numbersEL = document.getElementById('numbers');
// const symbolsEL = document.getElementById('symbols');
// const generateEL = document.getElementById('generate');
// const clipboardEL = document.getElementById('clipboard');



// const randomFunc = {
//        lower:getRandomLower,
//        upper:getRandomupper,
//        number:getRandoNumber,
//        symbols:getRandosymbol
// }

// generateEL.addEventListener('click', () => {
//        const length = +lengthEL.value;
//        const hasLower = lowercaseEL.spellcheck;
//        const hasUpper = uppercaseEL.spellcheck;
//        const hasNumber = numbersEL.spellcheck;
//        const hasSymbol = symbolsEL.spellcheck;

//        resultEL.innerText = generatePassword(
//               hasLower,
//               hasUpper,
//               hasNumber,
//               hasSymbol,
//               length
//        );
// });

// function generatePassword(lower, upper, number, symbols, length){
//        let generatePassword = "";
//        const typesCount = lower + upper + number + Symbol;
//        // console.log('typesCount:', typesCount);
//        const typesArr = ({lower}, {upper}, {number}, {Symbol}).filter
//        (item => Object.values(item)[0])
//        // console.log('typesArr:', typesArr);

//        if(typesCount === 0){
//               return '';
//        }

//        for(let i = 0; i < length; i += typesCount){
//               typesArr.forEach(type => {
//                  const funcName = Object.keys(type)[0];
                 
//                  generatePassword += randomFunc[funcName]();
//               });

//        }

//       const finalPassword = (generatePassword.slice(0,length));

//       return finalPassword;
// }

// function getRandomLower(){
//        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// function getRandomupper() {
//        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// function getRandoNumber() {
//        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandosymbol() {
//        const symbols = '!@#$%¨&*()./'
//        return symbols[Math.floor(Math.random() * symbols.length)];
// }


// console.log(getRandoNumber());



// mais uma opção



const quantidadeletras = document.getElementById('quantidadeletras')
// const demo3 = document.getElementById('demo3') tem coisa aqui
const incluirmaiusculasElement = document.getElementById('incluirmaiusculas')
const incluirnumerosElement = document.getElementById('incluirnumeros')
const incluirsimbolosElement = document.getElementById('incluirsimbolos')
const form = document.getElementById('geradorform')
const displaysenha = document.getElementById('displaysenha')

const codigo_maiusculas = arrayFromLowToHigh(65, 90)
const codigo_minussculas = arrayFromLowToHigh(97, 122)
const codigo_numeros = arrayFromLowToHigh(48, 57)
const codigo_simbolos = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

let mais = document.getElementById('aumentaQuantidade');
let menos = document.getElementById('diminuirQuantidade');
let input = document.getElementById('demo3');
let valor = input.value;



mais.addEventListener('click', function mais(){
  if(valor > 19){
    valor 
  }
  else if(valor < 8){
    valor ++
  }
  else{
    valor ++
    input.value = valor
    quantidadeletras.value = valor
  }
})

menos.addEventListener('click', function menos(){
    if(valor > 20){
      valor 
    }
    else if(valor < 9){
      valor ++
    }
    else{
      valor --;
      input.value = valor
      quantidadeletras.value = valor
  }
})



input.addEventListener('input', syncCharacterAmount)
quantidadeletras.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = input.value
  const incluirmaiusculas = incluirmaiusculasElement.checked
  const incluirnumeros = incluirnumerosElement.checked
  const incluirsimbolos = incluirsimbolosElement.checked
  const password = generatePassword(characterAmount, incluirmaiusculas, incluirnumeros, incluirsimbolos)
  displaysenha.value = password
})

function generatePassword(characterAmount, incluirmaiusculas
, incluirnumeros, incluirsimbolos) {
  let charCodes = codigo_minussculas
  if (incluirmaiusculas) charCodes = charCodes.concat(codigo_maiusculas)
  if (incluirsimbolos) charCodes = charCodes.concat(codigo_simbolos)
  if (incluirnumeros) charCodes = charCodes.concat(codigo_numeros)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  input.value = value
  quantidadeletras.value = value
}
   
function copyfunc() {
  // Get the text field
  var copyText = document.getElementById("displaysenha");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Texto Copiado: " + copyText.value);
}
