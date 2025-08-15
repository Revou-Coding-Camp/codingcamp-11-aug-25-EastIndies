
// Log a greeting to the console
console.log("Hello Handsome");

//Welcome Speech
WelcomeSpeech();

/**
 * Prompts the user for their name and displays it in the element
 * with the ID 'user-greeting' if a name is provided.
 */
function WelcomeSpeech() {
    let username = prompt("What is your name?");
    if (username  != '') {
        document.getElementById('user-greeting').textContent = username;
    }
}

/**
 * Handles the submission of a contact form.
 * Retrieves the user's name, email, and message from the form fields.
 * If all fields are filled, displays a thank you alert.
 * Otherwise, prompts the user to fill in the missing fields.
 */
function sendmessage() {
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
    } else {
        alert("Please fill the rest.");
    }
}