document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.slider-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Define how each card should look in the stack (size, position, etc.)
    let cardStyles = [
        {scale: 0.8, y: 0, z: 3, opacity: 1, right: '20%'},   // Top card
        {scale: 0.9, y: 40, z: 2, opacity: 1, right: '30%'},  // Middle card
        {scale: 1, y: 80, z: 1, opacity: 1, right: '10%'}     // Bottom card
    ];
    
    // Keep track of which card is where
    let currentCard = 0;
    const totalCards = cards.length;
    
    // Show the cards in their starting positions
    updateCardPositions();
    
    // Make the buttons work when clicked
    nextBtn.addEventListener('click', showNextCard);
    prevBtn.addEventListener('click', showPreviousCard);
    
    // Add touch controls for mobile devices
    const sliderContainer = document.querySelector('.slider-container');
    
    // Remember where the touch started
    sliderContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    // Check where the touch ended and decide what to do
    sliderContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        
        // If swiped left, show next card
        if (touchEndX < touchStartX - 50) {
            showNextCard();
        } 
        // If swiped right, show previous card
        else if (touchEndX > touchStartX + 50) {
            showPreviousCard();
        }
    });
    
    // Function to show the next card
    function showNextCard() {
        currentCard = (currentCard + 1) % totalCards;
        moveCards();
    }
    
    // Function to show the previous card
    function showPreviousCard() {
        currentCard = (currentCard - 1 + totalCards) % totalCards;
        moveCards();
    }
    
    // Add smooth animation when cards move
    function moveCards() {
        cards.forEach(card => {
            card.style.transition = 'all 0.6s ease';
        });
        
        // Small delay before updating positions
        setTimeout(updateCardPositions, 50);
    }
    
    // Update how each card looks based on its position
    function updateCardPositions() {
        for (let i = 0; i < totalCards; i++) {
            const position = (currentCard + i) % totalCards;
            const card = cards[i];
            const style = cardStyles[position];
            
            // Apply the correct style to each card
            card.style.transform = `scale(${style.scale}) translateY(${style.y}px)`;
            card.style.zIndex = style.z;
            card.style.opacity = style.opacity;
            card.style.right = style.right;
        }
    }
});