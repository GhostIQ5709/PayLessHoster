// Add event listener to sign up button
document.querySelector('button').addEventListener('click', function() {
	alert('Sign up now!');
});

// Add event listener to pricing plan buttons
document.querySelectorAll('.pricing li button').forEach(function(button) {
	button.addEventListener('click', function() {
		alert('Sign up for ' + button.parentNode.querySelector('h3').textContent + ' plan!');
	});
});