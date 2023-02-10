
function addition(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let result = num1 + num2;

    document.getElementById('result').innerText = result;
}

function subtraction(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let result = num1 - num2;

    document.getElementById('result').innerText = result;
}

function multiply(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    let result = num1 * num2;

    document.getElementById('result').innerText = result;
}
