const submitMessage = () => {
const passcode = document.querySelector("#passcode").value;
const message = document.querySelector("#message").value;
const error = document.getElementById("error");
var result = checkPasscode(passcode);
if(result != passcode){
    error.innerHTML = result;
    return result;
}
else if(result == passcode){
    var hashedPasscode = new Hashes.SHA512().b64(passcode)
}
firebase.database().ref("/messages").push({
    message: message,
    passcode: hashedPasscode
});
}

function checkPasscode(passcode){
    let numUpper = 0;
    let numLower = 0;
    for (let i = 0; i < passcode.length; i++) {
        letter = passcode.charAt(i);
        if(letter == letter.toUpperCase() && isNaN(parseFloat(letter))){
            numUpper ++;
        }
        else if(letter == letter.toLowerCase() && isNaN(parseFloat(letter))){
            numLower ++;
        }
}
console.log(numUpper);
console.log(numLower);
    if(numUpper >0 && numLower>0 && hasNumber(passcode)){
        return passcode;
    }
    else{
        return "Password Does Not Meet Criteria. Try Again"
    }
}
function hasNumber(myString) {
  return /\d/.test(myString);
}