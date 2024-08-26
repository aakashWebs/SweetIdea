document.addEventListener("DOMContentLoaded", function() {
    const mysteryBox = document.getElementById('mysteryBox');
    const content = document.getElementById('content');
    const fireworksContainer = document.getElementById('fireworks');

    // Function to create a single firework explosion at a given position
    const createFireworkExplosion = (x, y) => {
        const numSparks = 30; // Number of sparks per explosion
        for (let i = 0; i < numSparks; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            const size = Math.random() * 5 + 5; // Smaller sparks for explosion
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;
            spark.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
            fireworksContainer.appendChild(spark);

            // Animate each spark in a radial direction
            const angle = (Math.PI * 2) / numSparks * i; // Spread sparks evenly in a circle
            const velocity = Math.random() * 100 + 100; // Random speed for each spark
            const deltaX = Math.cos(angle) * velocity;
            const deltaY = Math.sin(angle) * velocity;

            spark.animate([
                { transform: `translate(0, 0)`, opacity: 1 },
                { transform: `translate(${deltaX}px, ${deltaY}px)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500, // Random duration for each spark
                easing: 'ease-out',
                fill: 'forwards'
            });

            setTimeout(() => {
                spark.remove();
            }, 1500); // Duration for each spark to disappear
        }
    };

    // Function to create explosions continuously across the screen
    const continuousExplosions = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const explosionInterval = setInterval(() => {
            const randomX = Math.random() * screenWidth;
            const randomY = Math.random() * screenHeight;
            createFireworkExplosion(randomX, randomY);
        }, 200); // Adjust interval for explosion frequency

        // Stop explosions after a set time (e.g., 5 seconds)
        setTimeout(() => {
            clearInterval(explosionInterval);
        }, 5000);
    };

    // Handle mystery box click
    mysteryBox.addEventListener('click', () => {
        mysteryBox.style.display = 'none'; // Hide mystery box
        continuousExplosions(); // Start continuous explosions

        // Show content after some delay
        setTimeout(() => {
            content.style.opacity = 1; // Show content
        }, 5000); // Delay to match the explosion duration
    });
});
