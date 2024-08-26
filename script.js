document.addEventListener("DOMContentLoaded", function() {
    const mysteryBox = document.getElementById('mysteryBox');
    const content = document.getElementById('content');
    const fireworksContainer = document.getElementById('fireworks');

    // Function to create a single firework spark
    const createFirework = () => {
        const spark = document.createElement('div');
        spark.className = 'spark';
        const size = Math.random() * 20 + 10;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.left = `${Math.random() * 100}vw`;
        spark.style.top = `-${size}px`; // Start above the viewport
        spark.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        spark.style.opacity = Math.random();
        spark.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
        fireworksContainer.appendChild(spark);

        // Animate the spark falling down
        spark.animate([
            { transform: `translateY(0)`, opacity: 1 },
            { transform: `translateY(100vh)`, opacity: 0 }
        ], {
            duration: 2000, // Duration for the animation
            easing: 'linear',
            fill: 'forwards'
        });

        setTimeout(() => {
            spark.remove();
        }, 2000); // Duration for each spark
    };

    // Handle mystery box click
    mysteryBox.addEventListener('click', () => {
        mysteryBox.style.display = 'none'; // Hide mystery box

        // Continuous fireworks
        const fireworksInterval = setInterval(createFirework, 100); // Create fireworks every 100ms

        // Stop fireworks after 5 seconds
        setTimeout(() => {
            clearInterval(fireworksInterval);
        }, 5000);

        // Show content after some delay
        setTimeout(() => {
            content.style.opacity = 1; // Show content
        }, 5000); // 5 seconds delay to match the fireworks duration
    });
});
