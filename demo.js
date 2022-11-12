let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

let paranAllowedchars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingcharacters = paranAllowedchars - enteredTextLength;

    remainingCharsElement.textContent = remainingcharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);