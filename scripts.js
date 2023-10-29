document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form'); 
    const email = document.querySelector('#email'); 
    const message = document.querySelector('.message'); 

   form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const userEmail = email.value.trim();

        if (userEmail.value.includes('@') && userEmail.value.includes('.com')) {
            // Display a success message
            message.textContent = `Thank you! Your email address ${userEmail} has been added to our mailing list!`;
            message.style.color = 'green';
            //console.log('submitted');
        } else {
            // Display an error message for no email provided
            message.textContent = 'Please enter a valid email address';
            message.style.color = 'red';
        }

        message.style.display = 'block';
    });
});
