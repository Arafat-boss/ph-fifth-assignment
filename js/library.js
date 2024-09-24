function getInputById(id){
    const inputValues = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValues);
    return inputNumber;
}