// Form handling
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        email: document.getElementById('email').value,
        name: document.getElementById('name').value,
        timestamp: new Date().toISOString()
    };
    
    // In a real app, you would send this to your backend
    console.log('Newsletter signup:', formData);
    
    // Store in localStorage
    let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    subscribers.push(formData);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form
    document.getElementById('newsletterForm').reset();
    
    // Scroll to success message
    document.getElementById('successMessage').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
});

// Footer navigation
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        
        // Simple navigation - in a real app, this would load different pages
        switch(page) {
            case 'home':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'map':
                alert('Map feature coming soon! 🗺️');
                break;
            case 'offers':
                alert('Special offers page coming soon! 💝');
                break;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive elements to workshop cards
document.querySelectorAll('.workshop-card').forEach(card => {
    card.addEventListener('click', function() {
        const workshopName = this.querySelector('h3').textContent;
        document.getElementById('name').focus();
    });
});