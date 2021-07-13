
const keyResult = document.getElementById('key-result');
const keyValue = document.getElementById('key-value');
const codeResult = document.getElementById('code-result');
const whichResult = document.getElementById('which-result');

window.addEventListener('keydown', event => {
    const keyEvent = event.key;
    const keyCode = event.code;
    const keyWhich = event.which;
    
    keyResult.textContent = keyEvent;
    keyValue.textContent = keyWhich;
    whichResult.textContent = keyWhich;
    codeResult.textContent = keyCode;
    
});