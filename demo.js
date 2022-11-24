const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

const paranAllowedchars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingcharacters = paranAllowedchars - enteredTextLength;

    remainingCharsElement.textContent = remainingcharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);