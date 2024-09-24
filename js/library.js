function getInputById(id){
    const inputValues = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValues);
    return inputNumber;
}

function getInputByText(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

