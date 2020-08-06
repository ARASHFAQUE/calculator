let resultField = document.getElementById('result');
function numberInput(num){
    let existingNum = resultField.innerText;
    resultField.innerText = existingNum + num;
}
function clearResult(){
    resultField.innerText = "";
}
function calculateInputs(){
    var result = eval(resultField.innerText);
    resultField.innerText = result;
}
function deleteOneByOne(){
    var value = resultField.innerText;
    if(value != ''){
        resultField.innerText = (value.slice(0,-1));
    }
}
