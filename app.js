
function validateLogin(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    
    const errorMsgUsername = document.getElementById('error-username');
    const errorMsgPassword = document.getElementById('error-password');

    
    
    errorMsgUsername.textContent = '';
    errorMsgPassword.textContent = '';

    // Check if  correct
    if (username === 'sankey901@solutions.com' && password === 'mindset') {
        
        localStorage.setItem('username', 'Sankey');
        window.location.href = 'welcome.html'; 
        
    } else if (username !== 'sankey901@solutions.com') {

        // If username is incorrect, display an error message
        errorMsgUsername.textContent = 'Invalid username/email';
        errorMsgUsername.style.color = 'red';

    } else if (password !== 'mindset') {
        // If password is incorrect, display an error message
        errorMsgPassword.textContent = 'Invalid password';
        errorMsgPassword.style.color = 'red';
    }
}
