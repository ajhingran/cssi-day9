// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     // Find message
 });
}

const findMessage = (messages) => {
 const passcodeAttempt = document.querySelector('#passcode').value;
 var hashedPasscode = new Hashes.SHA512().b64(passcodeAttempt);
 console.log(passcodeAttempt);
 console.log(hashedPasscode);
 for (message in messages) {
     const messageData = messages[message];
     if (messageData.passcode === hashedPasscode) {
        renderMessageAsHtml(messageData.message)
     }
 }
}


const renderMessageAsHtml = (message) => {
const passcodeInput = document.querySelector('#passcodeInput');
passcodeInput.style.display = 'none';
 // Hide Input Form

 // Render messageas HTML
 const messageDiv = document.querySelector('#message');
 messageDiv.innerHTML = message;
}