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
// Mobile Menu Functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const body = document.body;

function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
}

// Event Listeners
hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', closeMobileMenu);

// Close menu when clicking on links
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Update your existing smooth scrolling to work with mobile menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
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

// Update footer navigation to work with mobile
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        const page = this.getAttribute('data-page');
        
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
        
        switch(page) {
            case 'home':
                window.location.href = 'index.html';
                break;
            case 'map':
                window.location.href = 'map.html';
                break;
            case 'offers':
                window.location.href = 'offers.html';
                break;
            case 'workshops':
                window.location.href = 'workshops.html';
                break;
        }
    });
});