document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Form submitted - about to send email');
    
    const params = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('project').value
        
    };
    
    emailjs.send('service_l1vka9c', 'template_8pw7ufb', params)
        .then(function() {
            alert('SUCCESS!');
        }, function(error) {
            alert('FAILED...' + JSON.stringify(error));
        });
});