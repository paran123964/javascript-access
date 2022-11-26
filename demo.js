const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);

const paranAllowedchars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingcharacters = paranAllowedchars - enteredTextLength;

    remainingCharsElement.textContent = remainingcharacters;

    if (remainingcharacters === 0) {
        remainingCharsElement.classList.add('error');
        productNameInputElement.classList.add('error');
    } else if (remainingcharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        productNameInputElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('warning');
        productNameInputElement.classList.remove('warning');
        
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);